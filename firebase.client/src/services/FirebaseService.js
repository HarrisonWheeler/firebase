import { storage } from '../env'
import { logger } from '../utils/Logger'

class FirebaseService {
  async upload(imgName, data) {
    // NOTE this is creating the collection in firebase - And we can specify what that collection is called
    // May need to change this later depending on how we handle vidoes
    const collection = storage.ref('Images/' + imgName + '.png')

    // NOTE this is 'putting' the data we are passing in, and storing in the pathing we defined above
    const snapshot = await collection.put(data)

    // NOTE after we give our image data to firebase, this is bringing back the URL that was created by firebase
    const url = await snapshot.ref.getDownloadURL()

    logger.log('snapshot', snapshot)
    return url
  }
}

export const firebaseService = new FirebaseService()
