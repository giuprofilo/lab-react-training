import './driverCard.css';
import Rating from '../rating/rating';

function DriverCard({name, rating, img, car}){
    return (
        <>
            <div className='drivercard'>
                <img src={img} alt='profile picture' />
                <h2 style={{ fontSize: '1rem' }}>{name}</h2>
                <Rating>{rating}</Rating>
                <p>
                    {car.model} ({car.licensePlate})
                </p>

                </div>
                
            
        </>
    );

}

export default DriverCard;