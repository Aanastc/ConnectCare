import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CaretLeft } from 'phosphor-react'
import { useAuth } from '../../../contexts/AuthCtx'

export function PersonalDetails() {
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })

  const { register, handleSubmit } = useFormContext()
  const { singUp } = useAuth()
  const navigate = useNavigate()

  async function handleCreateUser({
    name,
    year,
    month,
    day,
    gender,
    role,
    email,
    password,
    passwordConfirmation
  }) {
    try {
      if (password.length < 8) {
        setStatus({
          type: 'error',
          mensagem: 'A senha deve ter no mínimo 8 caracteres.'
        })
        return
      } else if (password !== passwordConfirmation) {
        setStatus({
          type: 'error',
          mensagem: 'As senhas não coincidem.'
        })
        return
      }

      const birthdate = new Date(`${year}/${month}/${day}`).toISOString()

      await singUp({
        name,
        birthdate,
        gender,
        role,
        email,
        password
      })
      navigate('/auth/sign-up/autenticacao')
    } catch (error) {
      setStatus({
        type: 'error',
        mensagem: 'Ocorreu um erro ao fazer cadastro.'
      })
    }
  }

  return (
    <div className="p-6 rounded-xl shadow-lg bg-white max-w-md w-full">
      <h2 className="text-xl font-semibold text-center mb-8">
        Queremos saber mais sobre você
      </h2>

      {status.type === 'error' ? (
        <p className="text-red-600">{status.mensagem}</p>
      ) : (
        ''
      )}

      <form onSubmit={handleSubmit(handleCreateUser)}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-bold">
              Nome
            </label>
            <input
              id="name"
              type="text"
              placeholder="Insira seu nome completo"
              className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300"
              {...register('name')}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-bold">Data de Nascimento</h2>
            <div className="flex gap-4">
              <select
                id="day"
                className="basis-[50%] border-gray-300 border-2 rounded-lg p-3 text-base w-full"
                {...register('day')}
              >
                <option value="" disabled selected className="text-gray-300">
                  Dia
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select
                id="month"
                className="basis-[50%] border-gray-300 border-2 rounded-lg p-3 text-base w-full"
                {...register('month')}
              >
                <option value="" disabled selected className="text-gray-300">
                  Mês
                </option>
                <option value="01">Janeiro</option>
                <option value="02">Fevereiro</option>
                <option value="03">Março</option>
                <option value="04">Abril</option>
                <option value="05">Maio</option>
                <option value="06">Junho</option>
                <option value="07">Julho</option>
                <option value="08">Agosto</option>
                <option value="09">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
              </select>
              <select
                id="year"
                className="basis-[50%] border-gray-300 border-2 rounded-lg p-3 text-base w-full"
                {...register('year')}
              >
                <option value="" disabled selected className="text-gray-300">
                  Ano
                </option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Sexo</label>
            <div className="flex gap-6">
              <div className="flex gap-2">
                <input
                  id="female"
                  type="radio"
                  value="female"
                  className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300 accent-purple-600"
                  {...register('gender')}
                />
                <label htmlFor="female">Feminino</label>
              </div>
              <div className="flex gap-2">
                <input
                  id="male"
                  type="radio"
                  value="male"
                  className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300 accent-purple-600"
                  {...register('gender')}
                />
                <label htmlFor="male">Masculino</label>
              </div>
              <div className="flex gap-2">
                <input
                  id="other"
                  type="radio"
                  value="other"
                  className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300 accent-purple-600"
                  {...register('gender')}
                />
                <label htmlFor="other">Outro</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-bold">
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="Crie uma senha"
              className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300"
              {...register('password')}
            />
            <span className="text-xs text-gray-500 font-medium italic">
              *O tamanho mínimo para segurança da senha é de 8 caracteres.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="passwordConfirmation" className="text-sm font-bold">
              Confirmar senha
            </label>
            <input
              id="passwordConfirmation"
              type="password"
              placeholder="Confirme sua senha"
              className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300"
              {...register('passwordConfirmation')}
            />
          </div>
        </div>
        <button
          className="bg-purple-600 text-white font-bold px-6 py-3 rounded-lg ease-linear transition-all duration-150 hover:bg-purple-800 w-full mt-6"
          type="submit"
        >
          Continuar
        </button>
      </form>
      <div className="mt-4 flex justify-start">
        <button
          className="flex items-center justify-start gap-2 text-purple-600 hover:text-purple-400"
          onClick={() => navigate(-1)}
        >
          <CaretLeft size={18} weight="bold" />
          <span className="text-base font-bold">Voltar</span>
        </button>
      </div>
    </div>
  )
}
