import ImagePicker from 'react-native-image-picker'

const defaultOptions = {
    title: 'Choose Image',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
}

const imageGivenOptions = {
    title: 'Pick Image Options',
    customButtons: [{ name: 'preview', title: 'Preview Image' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
}

export function InsertPicture(hasPictureBefore, setUri, setPreview) {
    ImagePicker.showImagePicker(hasPictureBefore ? imageGivenOptions : defaultOptions, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            setPreview()
        }  else {
            setUri(response.uri)
        }
    })
}