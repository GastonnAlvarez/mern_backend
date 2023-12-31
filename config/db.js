import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(`MongoDB conectado en ${url}`);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
    }
}

export default conectarDB;