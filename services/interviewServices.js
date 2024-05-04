import interviews from '../models/interviews.js'

const model = interviews

const getAllObjects = async (filters = {}) => {
  try {
    const {
      query = {},
      selectFrom = {},
      sortBy = { _id: -1 },
      pageNum = 1,
      pageSize = 50
    } = filters
    const skip = (pageNum - 1) * pageSize

    return await model
      .find(query)
      .select(selectFrom)
      .sort(sortBy)
      .skip(skip)
      .limit(pageSize)
      .lean()
  } catch (error) {
    console.error(error)
  }
}

const getAllObjectsCount = async (filters = {}) => {
  try {
    const { query = {} } = filters

    return await model.countDocuments(query)
  } catch (error) {
    console.error(error)
  }
}

const createObject = async object => {
  try {
    return await model.create(object)
  } catch (error) {
    console.error(error)
  }
}
const getUserByEmail = async email => {
    try {
        return await model.findOne({ email: email });
    }catch(error){
        console.error(error);
    }
}

const updateObject = async (objectId, object) => {
  try {
    return await model.findByIdAndUpdate(objectId, object, { new: true })
  } catch (error) {
    console.error(error)
  }
}

const getObjectById = async objectId => {
  try {
    return await model.findById(objectId)
  } catch (error) {
    console.error(error)
  }
}

export default { getAllObjects, getAllObjectsCount, createObject, updateObject, getObjectById,getUserByEmail }