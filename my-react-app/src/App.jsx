import {useState, useEffect} from 'react';
import Classcard from "./components/Classcard";
import ClassList from "./components/ClassList";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
    const [classes, setClasses] = useState([
        {
            id: 1,
            classname: 'Pilates',
            trainer: 'Tasha',
            slots: 7,
            
        },
        {
            id: 2,
            classname: 'Weights',
            trainer: 'Njabulo',
            slots: 3,
            
        },
        {
            id: 3,
            classname: 'Yoga',
            trainer: 'Asanda',
            slots: 8,
            
        },
        {
            id: 4,
            classname: 'Pilates Advances',
            trainer: 'Mandy',
            slots: 5,
            
        },
        {
            id: 5,
            classname: 'Weight management',
            trainer: 'Sharon',
            slots: 7,
            
        },

    ]);

    const bookings = (id) => {
        setClasses((prevClasses) =>
            prevClasses.map((fitnessClass) =>
                fitnessClass.id === id && fitnessClass.slots > 0
                    ? { ...fitnessClass, slots: fitnessClass.slots - 1 }
                    : fitnessClass


        )
    );
};
useEffect(() => {
    console.log("Classes bookings updated:");
}, [classes]);

return (
    <>
    <Header />

    <Classlist 
    classes={classes} 
    onBooking={bookings} 
    />

    <Footer />
    </>

);


};

export default App;
