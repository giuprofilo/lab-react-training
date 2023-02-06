import './greetings.css';

function Greetings(props) {
    let hello = '';
  
    if (props.lang === 'de') {
        hello = 'Hallo';
    }
    if (props.lang === 'fr') {
        hello = 'Bonjour';
    }

    return (
      <div className='greetings'>
        {hello} {props.children}
      </div>
    );
  }
  
export default Greetings;