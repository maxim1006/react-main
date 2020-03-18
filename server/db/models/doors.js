import mongoose from "mongoose";

// создаю модель
export const Doors = mongoose.model("Door", {
    w: Number,
    h: Number,
    type: String // Sliding, Automatic, Basic
});



export const createDoors = async () => {

    // удаляю все двери
    // await Door.deleteMany({}).exec();

    // считаю количество созданных дверей
    const existingDoorsCount = await Doors.estimatedDocumentCount();

    // console.log(existingDoors);

    // нахожу все двери
    try {
        const doors = await Doors.find({type: "Sliding"}).exec();
        // console.log(doors);
    } catch (e) {
        console.log("door find error ", e);
    }

    if (existingDoorsCount) return;

    // Sliding
    const slidingDoor = new Doors({
        w: 20,
        h: 30,
        type: "Sliding"
    });

    try {
        await slidingDoor.save();
        console.log("slidingDoor saved");
    } catch (e) {
        console.log("slidingDoor save error ", e);
    }

    // Automatic
    const automaticDoor = new Doors({
        w: 20,
        h: 40,
        type: "Automatic"
    });

    try {
        await automaticDoor.save();
        console.log("automaticDoor saved");
    } catch (e) {
        console.log("automaticDoor save error ", e);
    }

    // Automatic
    const basicDoor = new Doors({
        w: 20,
        h: 40,
        type: "Basic"
    });

    try {
        await basicDoor.save();
        console.log("basicDoor saved");
    } catch (e) {
        console.log("basicDoor save error ", e);
    }
};

