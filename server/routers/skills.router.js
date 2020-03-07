import * as express from "express";
import * as fsExtra from "fs-extra";
import * as path from "path";
import {generateUniqueId} from "../helpers/helpers";

const rootDir = path.dirname(process.mainModule.filename);
const skillsPath = path.join(rootDir, 'data', 'skills.json');


export const skillsRouter = express.Router();


skillsRouter.get("/", async (req, res) => {
    try {
        const skills = await fsExtra.readJson(skillsPath);

        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});


// put - means that the put object will always be unique
skillsRouter.put('/', async (req, res) => {
    const {body = {}} = req;
    const uniqueStreamId = generateUniqueId();
    let skillValue;

    try {
        if (body.name) {
            let skills = await fsExtra.readJson(skillsPath);

            // check if object with same name exists
            const skillValues = Object.values(skills);
            const skillIndex = skillValues.findIndex(skill => skill.name === body.name);

            if (skillIndex === -1) {
                skillValue = {
                    id: uniqueStreamId,
                    ...body
                };

                skills[uniqueStreamId] = skillValue;

                await fsExtra.writeJson(skillsPath, skills);
            } else {
                // return existing object
                skillValue = skillValues[skillIndex];
            }

            // 201 Created
            res.status(201).json(skillValue);
        } else {
            throw {message: "No name in skill"};
        }
    } catch (e) {
        res.status(500).json({error: e.message});
    }
});

skillsRouter.delete("/", async (req, res) => {
    const {id} = req.query;

    try {
        if (!id) {
            throw {
                message: "No id property in delete request body"
            }
        } else {
            const skills = await fsExtra.readJson(skillsPath);
            const {[id]: removed, ...rest} = skills;
            await fsExtra.writeJson(skillsPath, rest);

            res.status(200).json(removed);
        }
    } catch (e) {
        res.status(500).json({error: e.message})
    }

});



