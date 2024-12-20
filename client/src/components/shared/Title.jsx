import { Helmet } from "react-helmet-async"
// eslint-disable-next-line react/prop-types
const Title = ({title="Chat App",description="This is chat app called chattu"}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}/>
    </Helmet>
  )
}

export default Title
