import { useFieldArray, useForm } from 'react-hook-form'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserCtx'
import { CloudArrowUp, PlusCircle, MinusCircle } from 'phosphor-react'
import { supabase } from '../../../services/supabase'

export function Informacao() {
  const { metadata } = useContext(UserContext)
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      experiencias: [{ cargo: '', duracao: '', atividade: '' }]
    }
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experiencias'
  })

  async function handleProfissional(data) {
    console.log(data)
    const { data: res, error } = await supabase
      .from('profissional')
      .update({
        peso: data.peso,
        altura: data.altura,
        formacao: data.formacao,
        resumo: data.resumo,
        restricoes: data.restricoes,
        especialidade: data.especialidade
      })
      .eq('id', metadata?.id)

    await supabase.from('profissional_experiencia').insert(
      data.experiencias.map(exp => ({
        cargo: exp.cargo,
        duracao: exp.duracao,
        resumo: exp.resumo,
        profissional_id: metadata?.id
      }))
    )

    console.log(res, error, metadata?.id)
  }

  return (
    <form onSubmit={handleSubmit(handleProfissional)}>
      <div className="flex flex-row gap-8 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="peso" className="text-sm font-bold">
            Peso
          </label>
          <input
            id="peso"
            type="text"
            {...register('peso')}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="altura" className="text-sm font-bold">
            Altura
          </label>
          <input
            id="altura"
            type="text"
            {...register('altura')}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="flex flex-row gap-8 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="formacao" className="text-sm font-bold">
            Formação
          </label>
          <input
            id="formacao"
            type="text"
            {...register('formacao')}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="especialidade" className="text-sm font-bold">
            Especialidade
          </label>
          <input
            id="especialidade"
            type="text"
            {...register('especialidade')}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <div className="flex flex-col">
          <label htmlFor="resumo" className="block text-sm font-bold">
            Resumo
          </label>
          <textarea
            name="resumo"
            id="resumo"
            {...register('resumo')}
            className="border-gray-300 border-2 rounded-lg p-3 h-44 text-base placeholder:text-gray-400 mt-2 resize-none"
            style={{ verticalAlign: 'top' }}
          />
        </div>
      </div>
      <h2 className="text-lg font-bold mb-2">Experiências</h2>
      {fields.map((item, index) => (
        <>
          <div className="flex flex-row gap-8 mb-4" key={item.id}>
            <div className="flex flex-col gap-2">
              <label htmlFor="cargo" className="text-sm font-bold">
                Cargo
              </label>
              <input
                id="cargo"
                type="text"
                placeholder="Insira seu cargo"
                {...register(`experiencias.${index}.cargo`)}
                className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="duracao" className="text-sm font-bold">
                Duração
              </label>
              <input
                id="duracao"
                type="text"
                placeholder="Insira a duração"
                {...register(`experiencias.${index}.duracao`)}
                className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex flex-col">
              <label htmlFor="resumo" className="block text-sm font-bold">
                Resumo
              </label>
              <textarea
                name="atividade"
                id="atividade"
                placeholder="Descreva suas atividades"
                {...register(`experiencias.${index}.atividade`)}
                className="border-gray-300 border-2 rounded-lg p-3 h-44 text-base placeholder:text-gray-400 mt-2 resize-none"
                style={{ verticalAlign: 'top' }}
              />
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <button
              className="flex flex-row items-center gap-2 font-bold mb-4"
              onClick={() => remove(index)}
            >
              Remover
              <MinusCircle size={32} />
            </button>
          </div>
        </>
      ))}
      <div className="flex flex-row justify-end">
        <button
          className="flex flex-row items-center gap-2 font-bold mb-4"
          onClick={() => append({ cargo: '', duracao: '', atividade: '' })}
        >
          Adicionar
          <PlusCircle size={32} />
        </button>
      </div>

      <div className="flex flex-col mb-4">
        <div className="flex flex-col">
          <label htmlFor="restricoes" className="block text-sm font-bold">
            Restrições
          </label>
          <textarea
            name="restricoes"
            id="restricoes"
            {...register('restricoes')}
            className="border-gray-300 border-2 rounded-lg p-3 h-44 text-base placeholder:text-gray-400 mt-2 resize-none"
            style={{ verticalAlign: 'top' }}
          />
        </div>
      </div>

      <div className="flex flex-row justify-between mb-4">
        <button className="flex flex-row border-2 border-gray-400 p-2 rounded-lg gap-4 items-center w-64 justify-between">
          Upload curriculo
          <CloudArrowUp size={28} />
        </button>
        <button className="flex flex-row border-2 border-gray-400 p-2 rounded-lg gap-4 items-center w-64 justify-between">
          Upload doc conselho
          <CloudArrowUp size={28} />
        </button>
        <button className="flex flex-row border-2 border-gray-400 p-2 rounded-lg gap-4 items-center w-64 justify-between">
          Upload certificados
          <CloudArrowUp size={28} />
        </button>
      </div>
      <div className="mb-2 flex justify-end items-center">
        <button className="bg-purple-500 text-white rounded-full h-10 w-64">
          Salvar
        </button>
      </div>
    </form>
  )
}
