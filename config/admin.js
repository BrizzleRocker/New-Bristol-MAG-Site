module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e42454c016b492398e64c335cac55957'),
  },
});
