import { CloudArrowUp } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { supabase } from '../../../services/supabase'

async function handleFileUpload(file) {
  const { data, error } = await supabase.storage
    .from('Documentos')
    .upload(`${file.name}`, file)

  if (error) {
    console.error(error)
  }
}

export function Documentos() {
  const { handleSubmit } = useForm({
    defaultValues: {
      experiencias: [{}]
    }
  })

  const handleChange = event => {
    const file = event.target.files[0]
    handleFileUpload(file)
  }

  return (
    <form onSubmit={handleSubmit(handleChange)}>
      <div className="flex flex-row gap-16 mb-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold">
            Documento de indentificação
          </label>
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center h-24 w-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <p class="mb-2 text-xs text-gray-500">
                <span class="font-semibold">
                  Arraste ou selecione o arquivo
                </span>
              </p>
              <CloudArrowUp size={32} color="#6b7280" />
              <p class="text-xs text-gray-500 uppercase">pdf</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold">
            Foto segurando o documento de indentificação
          </label>
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center h-24 w-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <p class="mb-2 text-xs text-gray-500">
                <span class="font-semibold">
                  Arraste ou selecione o arquivo
                </span>
              </p>
              <CloudArrowUp size={32} color="#6b7280" />
              <p class="text-xs text-gray-500 uppercase">PNG ou JPG</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div className="flex flex-row gap-16 mb-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold">Curriculo</label>
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center h-24 w-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <p class="mb-2 text-xs text-gray-500">
                <span class="font-semibold">
                  Arraste ou selecione o arquivo
                </span>
              </p>
              <CloudArrowUp size={32} color="#6b7280" />
              <p class="text-xs text-gray-500 uppercase">pdf</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold">Documento do Conselho</label>
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center h-24 w-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <p class="mb-2 text-xs text-gray-500">
                <span class="font-semibold">
                  Arraste ou selecione o arquivo
                </span>
              </p>
              <CloudArrowUp size={32} color="#6b7280" />
              <p class="text-xs text-gray-500 uppercase">Pdf</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div className="flex flex-row gap-16 mb-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold">Comprovante de endereço</label>
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center h-24 w-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <p class="mb-2 text-xs text-gray-500">
                <span class="font-semibold">
                  Arraste ou selecione o arquivo
                </span>
              </p>
              <CloudArrowUp size={32} color="#6b7280" />
              <p class="text-xs text-gray-500 uppercase">pdf</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold">Certificados</label>
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center h-24 w-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <p class="mb-2 text-xs text-gray-500">
                <span class="font-semibold">
                  Arraste ou selecione o arquivo
                </span>
              </p>
              <CloudArrowUp size={32} color="#6b7280" />
              <p class="text-xs text-gray-500 uppercase">pdf</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
    </form>
  )
}
