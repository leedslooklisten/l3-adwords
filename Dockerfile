FROM scratch

COPY l3-adwords /l3-adwords
COPY ./build build
EXPOSE 80
# EXPOSE 443
ENTRYPOINT ["/l3-adwords"]