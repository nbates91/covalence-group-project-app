import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import { styles } from '../../App';
import { post } from '../services/base';

export default class UploadImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadImg: false,
            url: '',
        }
    }

    uploadFile(file) {
        let path;
        if (Platform.OS === 'ios') {
            path = file.origURL;
        } else {
            path = file.path;
        }
        return RNFetchBlob.fetch('POST', 'https://api.cloudinary.com/v1_1/hxkggeeaw/image/upload?upload_preset=gbe07ivt', {
            'Content-Type': 'multipart/form-data'
        }, [
                { name: 'file', filename: file.fileName, data: RNFetchBlob.wrap(path) }
            ])
    }

    postToDb(url) {
        return post('https://bham-hops.herokuapp.com/api/image',
            {
                url: url
            }
        );
    }

    submit() {
        let options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        () => {
            this.setState({
                uploadImg: true
            });
        };

        ImagePicker.showImagePicker(options, (res) => {
            if (res.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (res.error) {
                console.log('Image Picker Error: ', res.error);
            }
            else if (res.customButton) {
                console.log('User tapped the custom button: ', res.customButton);
            }
            else {
                this.uploadFile(res)
                    .then(res => res.json())
                    .then(result => {
                        this.setState({
                            uploadImg: false,
                            url: result.secure_url
                        });
                        return result.secure_url;
                    }).then((url) => {
                        return this.postToDb(url);
                    });
            }
        });
    }

    render() {
        return (
            <View style={styles.container} >
                <Text>React Native Image Upload with Cloudinary!</Text>
                <TouchableOpacity onPress={() => this.submit()} style={styles.imageBtn} >
                </TouchableOpacity>
            </View>
        )
    }
}