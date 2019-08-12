## Create a custom Virtual Proxy

Case you need to create a custom virtual proxy, you can follow the below steps:

1. Go to QMC and Virtual Proxies and create new;
2. On Description, you can set it using a custom name;
3. On Prefix, you can set it with your custom prefix;
4. Uncheck "Is Default Virtual Proxy" case it's not the default virtual proxy;
5. On Session Cookie Header Name, you have to set it using a unique name;
6. Go to the Authentication tab and set as you wish;
  - Hint: It will define how you log in to the server.
7. Go to the Load Balancing tab and add a new server node;
  - Select the default server node (proxy).
8. Go to the Proxies tab (last item) and link it to the Central proxy server

Example: https://path/hub (without prefix)

Example: https://path/custom_prefix/hub (with prefix)
