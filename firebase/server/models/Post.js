import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    imgUrl: { type: String },
    videoUrl: { type: String },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Accont', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

PostSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})
