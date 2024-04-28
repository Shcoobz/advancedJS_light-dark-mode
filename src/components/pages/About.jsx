function About() {
  return (
    <section id='about'>
      <div className='title-group'>
        <h1>Undraw Illustrations</h1>
        <div className='about-container'>
          <div className='image-container'>
            <h2>Web Innovation</h2>
            <img
              src='assets/undraw_proud_coder_light.svg'
              alt='Proud Coder'
              id='image1'
              data-theme='undraw_proud_coder'
            />
          </div>
          <div className='image-container'>
            <h2>Problem Solving</h2>
            <img
              src='assets/undraw_feeling_proud_light.svg'
              alt='Feeling proud'
              id='image2'
              data-theme='undraw_feeling_proud'
            />
          </div>
          <div className='image-container'>
            <h2>High Concept</h2>
            <img
              src='assets/undraw_conceptual_idea_light.svg'
              alt='Conceptual Idea'
              id='image3'
              data-theme='undraw_conceptual_idea'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
