/* eslint-disable react/prop-types */
import Markdown from 'react-markdown'

export function AiRecipe(props) {
  return (
    <section className='recipe-response-container'>
      <Markdown>{props.recipe}</Markdown>
    </section>
  );
}
