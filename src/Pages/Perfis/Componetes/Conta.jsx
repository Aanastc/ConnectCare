import { useEffect, useContext } from 'react'
import { UserContext } from '../../../contexts/UserCtx'
import { supabase } from '../../../services/supabase'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'

export function Conta() {
  const { metadata, profile, fetchProfile } = useContext(UserContext)

  const { reset, register, handleSubmit } = useForm()

  const dataNiver = format(
    new Date(profile?.birthdate),
    'dd/LL/yyyy'
  ).toString()

  async function handleConta(data) {
    const birthdate = new Date(data.birthdate).toISOString()
    const { data: res, error } = await supabase
      .from('profiles')
      .update({
        name: data.name,
        birthdate: birthdate,
        gender: data.gender,
        CPF: data.cpf,
        RG: data.rg,
        logadouro: data.rua,
        numero: data.numero,
        bairro: data.bairro,
        complemento: data.complemento,
        estado: data.uf,
        cidade: data.cidade,
        cep: data.cep
      })
      .eq('id', metadata?.id)
    console.log(res)
    fetchProfile(metadata?.id)
  }

  console.log(profile)

  useEffect(() => {
    ;(async () => {
      const {
        data: [profile],
        error
      } = await supabase.from('profiles').select('*').eq('id', metadata?.id)
      reset({
        name: profile?.name,
        birthdate: dataNiver,
        gender: profile?.gender,
        cpf: profile.CPF
      })
    })()
  }, [])

  return (
    <form onSubmit={handleSubmit(handleConta)}>
      <div className="flex flex-row gap-8 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-bold">
            Nome
          </label>
          <input
            id="name"
            type="text"
            // value={profile?.name}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 value:text-black"
            {...register('name')}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={profile?.email}
            // {...register('email')}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 value:text-black"
          />
        </div>
      </div>
      <div className="flex flex-row gap-8 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="birthdate" className="text-sm font-bold">
            Data de Aniversario
          </label>
          <input
            id="birthdate"
            type="text"
            // value={dataNiver}
            {...register('birthdate')}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 value:text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="gender" className="text-sm font-bold">
            Sexo
          </label>
          <input
            id="gender"
            type="text"
            // value={profile?.gender}
            {...register('gender')}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-44 value:text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="perfil" className="text-sm font-bold">
            Perfil
          </label>
          <input
            id="perfil"
            type="text"
            value={profile?.role}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-44 value:text-black"
          />
        </div>
      </div>
      <div className="flex flex-row gap-8 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="cpf" className="text-sm font-bold">
            CPF
          </label>
          <input
            id="cpf"
            type="text"
            placeholder="000.000.000-00"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
            {...register('cpf')}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="rg" className="text-sm font-bold">
            RG
          </label>
          <input
            id="rg"
            type="text"
            placeholder="00.000.000-00"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
            {...register('rg')}
          />
        </div>
      </div>
      <div className="flex flex-row gap-8 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="rua" className="text-sm font-bold">
            Rua
          </label>
          <input
            id="rua"
            type="text"
            placeholder="Rua. Almeida de Costa"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
            {...register('rua')}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="numero" className="text-sm font-bold">
            Nº
          </label>
          <input
            id="numero"
            type="text"
            placeholder="325"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-24 placeholder:text-gray-400"
            {...register('numero')}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="bairro" className="text-sm font-bold">
            Bairro
          </label>
          <input
            id="bairro"
            type="text"
            placeholder="Confidentes"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-64 placeholder:text-gray-400"
            {...register('bairro')}
          />
        </div>
      </div>
      <div className="flex flex-row gap-8 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="complemento" className="text-sm font-bold">
            Complemento
          </label>
          <input
            id="complemento"
            type="text"
            placeholder="Bloco 9 ap.209"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
            {...register('complemento')}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="uf" className="text-sm font-bold">
            Estado
          </label>
          <input
            id="uf"
            type="text"
            placeholder="CE"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-24 placeholder:text-gray-400"
            {...register('uf')}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Cidade" className="text-sm font-bold">
            Cidade
          </label>
          <input
            id="Cidade"
            type="text"
            placeholder="Fortaleza"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-64 placeholder:text-gray-400"
            {...register('cidade')}
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <label htmlFor="cep" className="text-sm font-bold">
            CEP
          </label>
          <input
            id="cep"
            type="text"
            placeholder="00000-000"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-44 placeholder:text-gray-400"
            {...register('cep')}
          />
          <a
            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            target="_blank"
            className="text-xs text-gray-500 font-medium italic text-start"
          >
            *Não sei meu CEP
          </a>
        </div>
        <button className="bg-purple-500 text-white rounded-full h-10 w-64">
          Salvar
        </button>
      </div>
    </form>
  )
}
