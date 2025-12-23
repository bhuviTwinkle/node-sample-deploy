sudo nano /var/lib/rancher/k3s/server/manifests/traefik-config.yaml


//=========in traefik-config.yaml file add below lines==============

apiVersion: helm.cattle.io/v1
kind: HelmChartConfig
metadata:
  name: traefik
  namespace: kube-system
spec:
  valuesContent: |
    certificatesResolvers:
      letsencrypt:
        acme:
          email: your-email@example.com
          storage: /data/acme.json
          httpChallenge:
            entryPoint: web




sudo systemctl restart k3s


//===================================================================================