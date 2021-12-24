import React, { useState } from 'react'
import usersService from '../../../../services/users';
import { DropzoneDialog } from 'material-ui-dropzone';

const ChangeAvatar = ({ setCurrentUser, showDropzone, setShowDropzone }) => {
  const [imageFile, setImageFile] = useState(null);
  const [progress, setProgress] = useState(null);

  const handleFile = ([file]) => file && setImageFile(file);
  const handleDelete = () => setImageFile(null);

  const handleSubmit = async ([file]) => {
    const fd = new FormData();

    fd.append("avatar", file);
    const newUser = await usersService.changeAvatar(fd, setProgress);

    //update user
    const loggedUserJSON = window.localStorage.getItem("userAuthenticated");
    const oldUser = JSON.parse(loggedUserJSON);
    const updated = { ...oldUser, avatar: newUser.avatar };
    window.localStorage.setItem(
      "userAuthenticated", JSON.stringify(updated)
    );
    setCurrentUser(newUser);
    setShowDropzone(false);
  }

  return (
    <>
      <DropzoneDialog
        open={showDropzone}
        onChange={handleFile}
        onClose={() => setShowDropzone(false)}
        onDelete={handleDelete}
        acceptedFiles={['image/jpeg', 'image/png']}
        maxFileSize={20000000} //20MB as Max Limit
        filesLimit={1}
        showFileNamesInPreview={false}
        showFileNames={false}
        dropzoneText={'Drop image here'}
        getFileAddedMessage={() => 'Image successfully added!'}
        getFileRemovedMessage={() => 'Image successfully deleted!'}
        onAlert={(alert) => console.log({ alert })}
        getFileLimitExceedMessage={() => 'File is too big'}
        getDropRejectMessage={(file) => {
          if (file.size > 5000000) return 'File is too big';
          else return 'Invalid file type';
        }}
        onSave={handleSubmit}
      />
    </>
  )
}

export default ChangeAvatar