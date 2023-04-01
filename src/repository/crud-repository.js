const res = require("express/lib/response");

class CrudRepository{
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }
    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }
    async getAll(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }
    async update(modelId, data) {
        try {
            const result = this.model.update(data,{
                where: {
                    id: modelId
                },
            });
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }
    async destroy(data) {
        try {
            await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }
}

module.exports = CrudRepository;