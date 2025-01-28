FROM node:18

WORKDIR /usr/src/app

# Use a vulnerable package version to simulate vulnerability
COPY package.json ./   # Ensure the package.json points to a vulnerable version

# Insecure package installation
RUN npm install --unsafe-perm

# Expose a port without proper security
EXPOSE 8080

# Intentionally use a potentially vulnerable base image or unnecessary tools
RUN apt-get update && apt-get install -y curl

# Leave unnecessary files in the image to simulate a misconfiguration
COPY . .

# Expose a shell or another service without restrictions
CMD ["bash"]
