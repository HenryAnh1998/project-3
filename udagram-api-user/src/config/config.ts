export const config = {
  // 'username': process.env.POSTGRES_USERNAME,
  // 'password': process.env.POSTGRES_PASSWORD,
  // 'database': process.env.POSTGRES_DB,
  // 'host': process.env.POSTGRES_HOST,
  // 'dialect': 'postgres',
  // 'aws_region': process.env.AWS_REGION,
  // 'aws_profile': process.env.AWS_PROFILE,
  // 'aws_media_bucket': process.env.AWS_BUCKET,
  // 'url': process.env.URL,
  // 'jwt': {
  //   'secret': process.env.JWT_SECRET,
  // }
  'username': 'postgres',
  'password': 'Anhnm123!',
  'database': 'postgres',
  'host': 'database-1.cplbktqabrjt.us-east-1.rds.amazonaws.com',
  'dialect': 'postgres',
  'aws_region': 'us-east-1',
  'aws_profile': 'default',
  'aws_media_bucket': 'elasticbeanstalk-us-east-1-857585790692',
  'url': 'http://a1c52eb93a5df46c39e67a11876df0a2-1040072065.us-east-1.elb.amazonaws.com:8100',
  'jwt': {
    'secret': 'testing',
  }
};
