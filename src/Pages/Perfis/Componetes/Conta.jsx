import { useEffect, useState } from 'react'
import { useUser } from '../../../contexts/UserCtx'
import { supabase } from '../../../services/supabase'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'

export function Conta() {
  const [loadingUpdate, setLoadingUpdate] = useState(false)
  const { user, refetchUser, loading } = useUser()

  const { reset, register, handleSubmit } = useForm()

  async function handleConta(data) {
    const [day, month, year] = data.birthdate.split('/')
    const birthdate = new Date(`${year}/${month}/${day}`).toISOString()

    setLoadingUpdate(true)

    await supabase
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
      .eq('id', user?.id)
    refetchUser()
    setLoadingUpdate(false)
  }

  useEffect(() => {
    if (loading) return

    reset({
      name: user.name,
      birthdate: format(new Date(user.birthdate), 'dd/LL/yyyy').toString(),
      gender: user?.gender,
      cpf: user.CPF,
      rg: user.RG,
      rua: user.logadouro,
      numero: user.numero,
      bairro: user.bairro,
      complemento: user.complemento,
      uf: user.estado,
      cidade: user.cidade,
      cep: user.cep
    })
  }, [user, loading])

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
            value={user?.email}
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
            value={user?.role}
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
          <p className="text-sm font-bold">Estado</p>
          <select
            id="UF"
            name="UF"
            {...register('uf')}
            className="basis-[50%] border-gray-300 border-2 rounded-lg p-3 text-base w-24"
          >
            <option value="" className="text-gray-400">
              UF
            </option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MS">MS</option>
            <option value="MT">MT</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </select>
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
          {loadingUpdate ? (
            <div
              class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
            </div>
          ) : (
            'Salvar'
          )}
        </button>
      </div>
    </form>
  )
}
