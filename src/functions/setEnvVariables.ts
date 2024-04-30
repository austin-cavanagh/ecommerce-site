import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from '@aws-sdk/client-secrets-manager';

export async function setEnvVariables() {
  const secretName = 'b2c-ecommerce-website-keys';

  const client = new SecretsManagerClient({
    region: 'us-west-1',
  });

  try {
    const response = await client.send(
      new GetSecretValueCommand({
        SecretId: secretName,
        VersionStage: 'AWSCURRENT', // VersionStage defaults to AWSCURRENT if unspecified
      }),
    );

    if (!response.SecretString) return;

    const secret = JSON.parse(response.SecretString);

    // Set environment variables
    Object.keys(secret).forEach((key, value) => {
      // console.log('KEY:', key);
      // console.log('VALUE:', secret[key]);
      // if (key === 'NEXTAUTH_URL') {
      //   process.env[key] = 'http://localhost:3000';
      // } else {
      //   process.env[key] = secret[key];
      // }

      process.env[key] = secret[key];
    });

    // Now your environment variables are available for use
  } catch (error) {
    console.error('Error retrieving secret:', error);
  }
}
