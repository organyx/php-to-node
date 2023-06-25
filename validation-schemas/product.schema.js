const z = require('zod');
const { ObjectId } = require('mongoose').Types;

const productSchema = z.object({
  name: z.string().min(3).max(255),
  price: z.number().min(0).max(1000000).optional(),
  description: z.string().min(3).max(255).optional(),
  quantity: z.number().min(0).max(1000000).optional(),
  image: z.string().min(3).max(255).optional()
});

module.exports = {
  createProductSchema: z.object({
    body: productSchema
  }),
  updateProductSchema: z.object({
    params: z.object({
      id: z.custom(val => ObjectId.isValid(val))
    }),
    body: productSchema
  })
};
