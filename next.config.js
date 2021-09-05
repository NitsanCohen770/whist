/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  ignoreBuildErrors: true,
  env: {
    MONGO_URL:
      'mongodb+srv://nitsancohen:ua3ddcs3@cluster0.fnu3q.mongodb.net/whist?retryWrites=true&w=majority?ssl=true',
  },
};
