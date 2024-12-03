#!/bin/sh

echo "set \$add_header_feature_policy \"${ADD_HEADER_FEATURE_POLICY}\"; set \$add_header_permissions_policy \"${ADD_HEADER_PERMISSIONS_POLICY}\"; set \$add_header_content_security_policy \"${ADD_HEADER_CONTENT_SECURITY_POLICY}\";" >> /etc/nginx/add-header.conf
