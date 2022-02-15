import './styles.css'

type Props = {
  authentication: string
}

export default function HeaderTheme({authentication}: Props) {
  return (
    <div>
      <ul>
        { authentication === 'administrador' && (
          <>
            <li>
              <a href="/cadastro">Cadastros</a>
            </li>
            <li>
              <a href="/financeiro">Financeiro</a>
            </li>
          </>
        )}
        <li>
          <a href="/relatorios">Relatórios</a>
        </li>
      </ul>
    </div>
  )
}