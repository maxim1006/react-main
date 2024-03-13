echo "--- npm run build"
npm run build

# GENERATE_DOC_ENABLE - это переменная в переменных окружения
if [[ "${GENERATE_DOC_ENABLE}" == "true" ]]; then
    echo "--- npm run documentation"
    npm run documentation
fi

echo "--- npm start"
npm start
