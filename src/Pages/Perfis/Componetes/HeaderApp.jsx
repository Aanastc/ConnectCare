import { Fragment, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Bell, CaretDown } from 'phosphor-react'
import { UserContext } from '../../../contexts/UserCtx'

import fotoPerfil from '../../../assets/imgs/fotoPerfil.png'
import { useNavigate } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function HeaderApp() {
  const { metadata, signOut } = useContext(UserContext)
  const navigate = useNavigate()

  async function handleSingOut() {
    await signOut()
    navigate('/auth/sign-in')
  }

  return (
    <nav className="relative z-0 top-0 p-4 flex flex-wrap items-center justify-end bg-white gap-4">
      <Bell size={28} color="#9063CD" />
      <div className="flex flex-row items-center gap-4">
        <img
          src={fotoPerfil}
          alt="Foto de uma mulher de cabelo preto sorrindo"
          class="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
        />
        <p className="text-base font-semibold text-purple-600">
          {metadata?.name}
        </p>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2">
              <CaretDown
                size={22}
                color="#9063CD"
                className="mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Editar Perfil
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Support
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Configurações
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm'
                      )}
                      onClick={handleSingOut}
                    >
                      Sair
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  )
}
