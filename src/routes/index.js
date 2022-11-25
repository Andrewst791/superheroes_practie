const superheroe_routes = require("./superheroe.routes")

const project_routes = (app)=>{
    app.use('/api/v1/superheroes/', superheroe_routes)
}

module.exports = project_routes