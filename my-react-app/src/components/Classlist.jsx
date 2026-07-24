import Classcard from "./Classcard";

function Classlist({ classes, bookings }) {
    return (
        <div>
            {classes.map((fitnessClass) => (
                <Classcard
                    key={fitnessClass.id}
                    classname={fitnessClass.classname}
                    trainer={fitnessClass.trainer}
                    slots={fitnessClass.slots}
                    onBooking={bookings}
                />
            ))}
        </div>
    );
}

export default Classlist;