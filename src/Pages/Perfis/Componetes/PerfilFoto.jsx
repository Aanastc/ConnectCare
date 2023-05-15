import { Eyedropper, Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { useUser } from '../../../contexts/UserCtx'
import { supabase } from '../../../services/supabase'

export function FotoPerfil() {
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const { user, refetchUser, loading } = useUser()
  console.log(user)

  const handleImageUpload = async event => {
    const file = event.target.files[0]
    setPreview(file)
    console.log(file)
  }

  const handleSave = async () => {
    const path = preview.name

    const { data, error } = await supabase.storage
      .from('FotoPerfil')
      .upload(path, preview)

    await supabase
      .from('profiles')
      .update({
        avatarPath: path
      })
      .eq('id', user?.id)
    refetchUser()

    if (error) {
      console.error(error)
    } else {
      setPreview(null)
    }
  }

  return (
    <div className="flex justify-center flex-col p-3 border border-purple-500 rounded-lg items-center shadow-lg h-56 w-44">
      {preview ? (
        <div className="flex flex-col items-center">
          <AvatarEditor width={153} height={134} image={preview} />
          <button onClick={handleSave}>Salvar</button>
        </div>
      ) : (
        <>
          <img src={user.avatar} className="h-40 w-36 rounded-3xl mb-4" />
          <div className="flex flex-row gap-8">
            <Trash size={28} weight="thin" />
            <label for="file-upload" class="custom-file-upload">
              <Eyedropper size={28} weight="thin" />
            </label>
            <input
              id="file-upload"
              type="file"
              hidden
              onChange={handleImageUpload}
              accept="image/*"
            />
          </div>
        </>
      )}
    </div>
  )
}
