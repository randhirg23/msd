# Environment Configuration Setup

This guide explains how to configure your environment variables for the Car Rental Backend.

## 📁 Environment File

The application uses `config.env` file to store environment variables. This file contains sensitive information and should be kept secure.

## 🔧 Configuration Steps

### 1. Create Environment File

Copy the example file and customize it:

```bash
# Copy the example file
cp config.env.example config.env

# Or create a new config.env file
```

### 2. Configure MongoDB Connection

Edit the `config.env` file and update the MongoDB URI:

```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/?appName=your_app_name
```

### 3. Set JWT Secret

Generate a secure JWT secret key:

```env
# JWT Secret Key (Change this to a secure random string)
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
```

### 4. Configure Server Settings

```env
# Server Configuration
PORT=5000

# Environment
NODE_ENV=development
```

## 🔐 Security Best Practices

### Environment File Security:
- ✅ **Never commit** `config.env` to version control
- ✅ **Add to .gitignore** to prevent accidental commits
- ✅ **Use strong passwords** for database connections
- ✅ **Rotate secrets** regularly in production

### JWT Secret Security:
- ✅ **Use a long, random string** (at least 32 characters)
- ✅ **Different secrets** for development and production
- ✅ **Store securely** in production environments

## 📋 Environment Variables Reference

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `MONGODB_URI` | MongoDB connection string | ✅ Yes | - |
| `JWT_SECRET` | Secret key for JWT tokens | ✅ Yes | - |
| `PORT` | Server port | ❌ No | 5000 |
| `NODE_ENV` | Environment mode | ❌ No | development |

## 🚀 Quick Start

1. **Copy the example file:**
   ```bash
   cp config.env.example config.env
   ```

2. **Edit your MongoDB URI:**
   ```bash
   # Open config.env in your editor
   nano config.env
   # or
   code config.env
   ```

3. **Update the connection string:**
   ```env
   MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/?appName=your_app_name
   ```

4. **Set a secure JWT secret:**
   ```env
   JWT_SECRET=your_very_secure_random_string_here_at_least_32_characters_long
   ```

5. **Start the server:**
   ```bash
   npm run dev
   ```

## 🔍 Troubleshooting

### Common Issues:

1. **"MONGODB_URI is not defined"**
   - Check if `config.env` file exists
   - Verify the file is in the correct location
   - Ensure the MongoDB URI is properly formatted

2. **"MongoDB connection error"**
   - Verify your MongoDB credentials
   - Check if your IP is whitelisted in MongoDB Atlas
   - Ensure the connection string is correct

3. **"JWT_SECRET is not defined"**
   - Set a JWT secret in your `config.env` file
   - Use a long, random string

## 📝 Example Configuration

```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/carrental?retryWrites=true&w=majority

# JWT Secret Key
JWT_SECRET=my_super_secret_jwt_key_that_is_very_long_and_secure_123456789

# Server Configuration
PORT=5000

# Environment
NODE_ENV=development
```

## 🛡️ Production Considerations

For production environments:

1. **Use environment variables** instead of files
2. **Use a secrets management service** (AWS Secrets Manager, Azure Key Vault, etc.)
3. **Enable MongoDB authentication** and SSL
4. **Use strong, unique passwords**
5. **Regularly rotate secrets**

## 📞 Support

If you encounter any issues with environment configuration:

1. Check the console logs for specific error messages
2. Verify your MongoDB connection string format
3. Ensure all required environment variables are set
4. Check file permissions and locations
