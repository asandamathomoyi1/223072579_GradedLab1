import Classcard from "./Classcard";

function Classlist({ fitnessClasses, bookings }) {
    return (
        <div
            style ={{ 
                border: '2px solid black',
                padding: '10px',
                margin: '10px',
                borderRadius: '5px',
            }}
            >

                <h2>{fitnessClasses.classname}</h2>

                <p>Trainer: {fitnessClasses.trainer}</p>
                <p>Slots Available: {fitnessClasses.slots}</p>

                {fitnessClasses.slots > 0 ? (
                    <button onClick={() => bookings(fitnessClasses.id)}>
                        Book Now
                        </button>
                ) : (
                    <h3 style={{ color: 'red' }}>
                        Fully Booked
                        </h3>
                )}
        </div>
    );
}

export default Classlist;