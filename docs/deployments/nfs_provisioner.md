---
id: nfs_provisioner
title: Nfs Provisioner
sidebar_label: Nfs Provisioner
sidebar_position: 3
---

### Introduction to NFS Provisioner in Kubernetes

In Kubernetes, storage is a critical component for stateful workloads. NFS (Network File System) is a distributed file system protocol that allows you to mount remote directories on your local machine. NFS can be used as a storage solution for Kubernetes clusters. However, managing NFS volumes manually can be challenging, especially in large clusters. The NFS provisioner is a Kubernetes tool that automates the process of creating and managing NFS volumes in your cluster.

In this article, we will discuss the NFS provisioner in Kubernetes, its features, and how to set it up and use it in your Kubernetes cluster.

### NFS Provisioner Overview

The NFS provisioner is a dynamic provisioner that can create and manage NFS volumes in Kubernetes clusters. The provisioner is designed to work with a backend NFS server that provides the actual storage. The provisioner runs as a Kubernetes pod and communicates with the backend NFS server to create and manage NFS volumes.

The NFS provisioner provides the following features:

- **Dynamic provisioning**: The NFS provisioner can create NFS volumes on demand when a Kubernetes pod requests them. This means that you don't have to manually create NFS volumes before using them in your cluster.

- **Automatic cleanup**: The NFS provisioner can automatically delete NFS volumes when they are no longer needed. This ensures that your cluster doesn't accumulate unused volumes and helps you save storage space.

- **Mount options customization**: The NFS provisioner allows you to customize the mount options used to mount NFS volumes. This is useful when you need to mount NFS volumes with specific options, such as read-only access.

- **Volume access mode customization**: The NFS provisioner allows you to customize the access mode for NFS volumes. This is useful when you need to restrict access to NFS volumes, such as allowing read-only access.

### Setting up NFS Provisioner
Before you can use the NFS provisioner in your Kubernetes cluster, you need to set it up. Here are the steps to set up the NFS provisioner:

- **Step 1**: Set up the NFS server
The NFS server provides the actual storage for the NFS volumes created by the NFS provisioner. You can use an existing NFS server or set up a new one. To set up a new NFS server, follow these steps:

1. Launch a new Ubuntu 20.04 server instance on your preferred cloud provider or on-premises infrastructure.

2. Install the NFS server package on the Ubuntu server by running the following command:

```bash
sudo apt-get update
sudo apt-get install nfs-kernel-server -y
```

3. Create a directory to share over NFS. For example, you can create a directory called /var/nfs/share by running the following command:

```bash
sudo mkdir -p /var/nfs/share
```

4. Grant access to the NFS share by editing the /etc/exports file. For example, you can add the following line to the /etc/exports file to grant read/write access to all clients:
```bash
/var/nfs/share *(rw,sync,no_subtree_check)
```

Export the NFS share by running the following command:

```bash
sudo exportfs -a
```

- **Step 2**: Deploy the NFS provisioner

Once you have set up the NFS server, you can deploy the NFS provisioner in your Kubernetes cluster. Here are the steps to deploy the NFS provisioner:

1. Clone the NFS provisioner repository by running the following command:

```bash
git clone https://github.com/kubernetes-incubator/external-storage.git
```

2. Change the directory to the NFS provisioner directory by running the following command:

```bash
cd external-storage/nfs
```

3. Create a new file called `nfs-provisioner-values.yaml

Now that we have the deployment manifest for the NFS provisioner, we can create a new file called nfs-provisioner-values.yaml to specify the values for the configuration variables used in the deployment.

In this file, we will define the following variables:

- **storageClass.name**: The name of the storage class to be created.
- **nfs.server**: The IP address or hostname of the NFS server.
- **nfs.path**: The path to the NFS share.
- **persistence.size**: The size of the persistent volume to be created.

Here is an example of the nfs-provisioner-values.yaml file:

```yaml
storageClass:
  name: nfs-client

nfs:
  server: 192.168.1.100
  path: /nfs/share

persistence:
  size: 1Gi
```

You can customize the values in this file to match your own environment.

### Deploy the NFS provisioner

To deploy the NFS provisioner in your Kubernetes cluster, run the following command:

```bash
helm install nfs-provisioner stable/nfs-client-provisioner -f nfs-provisioner-values.yaml
```

This command will install the NFS provisioner using the values specified in the nfs-provisioner-values.yaml file.

### Test the NFS provisioner

To test the NFS provisioner, you can create a new PVC using the storage class created by the NFS provisioner. Here is an example of a PVC manifest that uses the nfs-client storage class:

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 1Gi
  storageClassName: nfs-client
```

When you create this PVC, the NFS provisioner will create a new PV and mount the NFS share to the volume. You can then create a new pod that uses this PVC to store data.

### Conclusion

In this guide, we have shown you how to set up an NFS provisioner in your Kubernetes cluster using Helm. With the NFS provisioner, you can easily provision new volumes backed by an NFS share, making it easy to store and access persistent data in your Kubernetes applications.

We hope this guide has been helpful, and we encourage you to explore other storage options available in Kubernetes to find the best solution for your needs.

### Resources

- [NFS Provisioner GitHub repository](https://github.com/helm/charts/tree/master/stable/nfs-client-provisioner)
- [Kubernetes documentation on storage classes](https://kubernetes.io/docs/concepts/storage/storage-classes/)


