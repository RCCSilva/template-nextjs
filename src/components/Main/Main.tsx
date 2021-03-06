import * as S from './Main.styles'

const Main = ({
  title = 'React Avançado!',
  description = 'Typescript, ReactJS, NextJS e Styled Components',
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Desenvolvedor sentando em uma cadeira com telas representando o código"
      />
    </S.Wrapper>
  )
}

export default Main
