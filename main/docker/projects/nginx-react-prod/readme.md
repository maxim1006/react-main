### Build in docker

```
docker build . -t nginx-react-prod
docker run -d -p 8080:8080 -e "GENERATE_DOC_ENABLE=true" -e "CONTENT_SECURITY_POLICY=default-src 'self' 'unsafe-inline' 'unsafe-eval' *;" nginx-react-prod
```

Pay attention that you need to provide CONTENT_SECURITY_POLICY (CSP).

Pay attention that .sh files and Dockerfile should use LF instead of CRLF.
