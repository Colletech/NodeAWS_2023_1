module.exports = {
    // Configuración de la apliación
    app: {
        port: process.env.PORT || 3000
    },

    // Configuración de la base de datos
    database: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce'
    },

    secret_key: {
        key: process.env.SECRET_KET || 'ul176AD^^^Eso[xQBMZ~'
    }
}