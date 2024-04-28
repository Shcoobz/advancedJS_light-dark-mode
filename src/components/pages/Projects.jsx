/**
 * Projects renders the projects section, showcasing various styled buttons and a descriptive text box.
 */
function Projects() {
  return (
    <section id='projects'>
      <div className='title-group'>
        <h1>Buttons</h1>
        <div className='buttons'>
          <button className='primary'>Primary</button>
          <button className='outline'>Outline</button>
          <button className='primary' disabled>
            Primary Disabled
          </button>
          <button className='secondary'>Secondary</button>
          <button className='secondary outline'>Secondary Outline</button>
          <button className='outline' disabled>
            Outline Disabled
          </button>
        </div>
        <div className='text-box' id='text-box'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quia in sunt
            velit assumenda sint, doloribus enim praesentium quae dicta hic dolorum
            voluptatem, iste distinctio ea quasi id explicabo numquam.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
