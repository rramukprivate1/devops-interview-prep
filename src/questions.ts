// src/questions.ts

export const questions = [
  {
    category: "AWS",
    question: "What is AWS?",
    answer: "Amazon Web Services (AWS) is a comprehensive, evolving cloud computing platform provided by Amazon...",
    example: "Using AWS EC2 to spin up virtual servers or S3 for storing static assets.",
    crossQuestions: ["What are the core benefits of cloud computing?", "What is the difference between IaaS and PaaS?"]
  },

{
 category:"AWS",
 question:"What is AWS?",
 answer:"AWS is Amazon's cloud platform that provides compute, storage, networking and managed services.",
 example:"Instead of buying physical servers, companies launch EC2 instances in AWS."
},

{
 category:"AWS",
 question:"What is EC2?",
 answer:"EC2 is a virtual machine service in AWS.",
 example:"A Java application can be hosted on an EC2 instance."
},

{
 category:"AWS",
 question:"What is S3?",
 answer:"S3 is an object storage service used to store files, backups and static websites.",
 example:"Application logs and backups are commonly stored in S3."
},

{
 category:"AWS",
 question:"What is IAM?",
 answer:"IAM manages users, groups, roles and permissions in AWS.",
 example:"Developers can be given EC2 access without giving full admin permissions."
},

{
 category:"AWS",
 question:"What is a VPC?",
 answer:"VPC is a logically isolated virtual network in AWS.",
 example:"Production and Development environments can be separated using different VPCs."
},

{
 category:"AWS",
 question:"What is a Security Group?",
 answer:"Security Group acts as a virtual firewall at EC2 instance level.",
 example:"Allow SSH on port 22 only from office IP."
},

{
 category:"AWS",
 question:"What is NACL?",
 answer:"Network ACL acts as a firewall at subnet level.",
 example:"Block specific IP ranges from accessing a subnet."
},

{
 category:"AWS",
 question:"Security Group vs NACL?",
 answer:"Security Group is stateful and instance-level. NACL is stateless and subnet-level.",
 example:"EC2 uses Security Groups while subnet uses NACL."
},

{
 category:"AWS",
 question:"What is Route53?",
 answer:"Route53 is AWS DNS service.",
 example:"mycompany.com can be mapped to an AWS Load Balancer using Route53."
},

{
 category:"AWS",
 question:"What is an Availability Zone?",
 answer:"Availability Zone is an isolated data center within a region.",
 example:"Deploying across multiple AZs improves high availability."
},

{
 category:"AWS",
 question:"What is a Region?",
 answer:"A Region is a geographical area containing multiple Availability Zones.",
 example:"Mumbai and Singapore are AWS Regions."
},

{
 category:"AWS",
 question:"What is Elastic Load Balancer?",
 answer:"ELB distributes incoming traffic across multiple servers.",
 example:"Traffic is shared among several EC2 instances."
},

{
 category:"AWS",
 question:"What is Auto Scaling?",
 answer:"Auto Scaling automatically increases or decreases EC2 instances based on demand.",
 example:"During peak traffic AWS launches additional EC2 instances."
},

{
 category:"AWS",
 question:"What is CloudWatch?",
 answer:"CloudWatch is AWS monitoring service.",
 example:"CPU utilization alerts can be configured using CloudWatch."
},

{
 category:"AWS",
 question:"What is an EBS Volume?",
 answer:"EBS provides block storage for EC2 instances.",
 example:"Application data can be stored on EBS volumes."
},

{
 category:"AWS",
 question:"Difference between EBS and S3?",
 answer:"EBS is block storage attached to EC2. S3 is object storage accessed over network.",
 example:"Database data uses EBS, backups use S3."
},

{
 category:"AWS",
 question:"What is a NAT Gateway?",
 answer:"NAT Gateway allows private instances to access the internet.",
 example:"Private EC2 downloads updates through NAT Gateway."
},

{
 category:"AWS",
 question:"What is RDS?",
 answer:"RDS is AWS managed relational database service.",
 example:"MySQL databases can run on RDS without managing servers."
},

{
 category:"AWS",
 question:"What is CloudFormation?",
 answer:"CloudFormation provisions infrastructure using templates.",
 example:"Entire AWS environments can be created from YAML templates."
},

{
 category:"AWS",
 question:"How do you make an application highly available?",
 answer:"Deploy across multiple Availability Zones with Load Balancer and Auto Scaling.",
 example:"Application continues running even if one AZ fails."
},

{
 category:"Docker",
 question:"What is Docker?",
 answer:"Docker is a containerization platform.",
 example:"Applications and dependencies are packaged into containers."
},

{
 category:"Docker",
 question:"What is a Container?",
 answer:"Container is a running instance of a Docker image.",
 example:"Running nginx image creates an nginx container."
},

{
 category:"Docker",
 question:"What is a Docker Image?",
 answer:"Docker Image is a template used to create containers.",
 example:"nginx image can be used to create multiple nginx containers."
},

{
 category:"Docker",
 question:"Docker Image vs Container?",
 answer:"Image is a blueprint. Container is a running instance.",
 example:"One image can create many containers."
},

{
 category:"Docker",
 question:"What is Dockerfile?",
 answer:"Dockerfile contains instructions to build Docker images.",
 example:"Install Java and copy application files."
},

{
 category:"Docker",
 question:"What is Docker Hub?",
 answer:"Docker Hub is a repository for Docker images.",
 example:"Official nginx images are stored in Docker Hub."
},

{
 category:"Docker",
 question:"How do you build a Docker image?",
 answer:"Use docker build command.",
 example:"docker build -t myapp ."
},

{
 category:"Docker",
 question:"How do you run a container?",
 answer:"Use docker run command.",
 example:"docker run nginx"
},

{
 category:"Docker",
 question:"What are Docker Volumes?",
 answer:"Volumes provide persistent storage for containers.",
 example:"Database data remains even after container deletion."
},

{
 category:"Docker",
 question:"Why are volumes needed?",
 answer:"Container storage is temporary.",
 example:"MySQL data would be lost without a volume."
},

{
 category:"Docker",
 question:"What is Port Mapping?",
 answer:"Port mapping exposes container ports to host.",
 example:"8080:80 maps host port 8080 to container port 80."
},

{
 category:"Docker",
 question:"What is Docker Compose?",
 answer:"Docker Compose manages multi-container applications.",
 example:"Application, database and Redis can be started together."
},

{
 category:"Docker",
 question:"What is the difference between CMD and ENTRYPOINT?",
 answer:"CMD provides default command. ENTRYPOINT defines fixed executable.",
 example:"ENTRYPOINT java, CMD application.jar."
},

{
 category:"Docker",
 question:"How do you view container logs?",
 answer:"Use docker logs command.",
 example:"docker logs container_id"
},

{
 category:"Docker",
 question:"What are Docker Networks?",
 answer:"Docker networks allow containers to communicate.",
 example:"Frontend container connects to backend container."
},

{
 category:"Cross",
 question:"Can one Docker image create multiple containers?",
 answer:"Yes.",
 example:"nginx image → 10 nginx containers."
},

{
 category:"Cross",
 question:"Can an EC2 exist without VPC?",
 answer:"No. Every EC2 runs inside a VPC."
},

{
 category:"Cross",
 question:"Can a private EC2 access internet?",
 answer:"Yes, through NAT Gateway.",
 example:"yum update from private subnet."
},

{
 category:"Cross",
 question:"Can Security Group deny traffic?",
 answer:"No. Security Groups only allow traffic."
},

{
 category:"Cross",
 question:"Can NACL deny traffic?",
 answer:"Yes. NACL supports allow and deny rules."
},

// KUBERNETES QUESTIONS (21–45)
{
  category: "Kubernetes",
  question: "What is Kubernetes (K8s)?",
  answer: "Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications.",
  example: "If a container crashes at 3 AM, Kubernetes automatically destroys it and launches a fresh one.",
  crossQuestions: ["How does Kubernetes differ from Docker Compose?", "What is the role of the control plane?"]
},
{
  category: "Kubernetes",
  question: "What is a Pod?",
  answer: "A Pod is the smallest deployable unit in Kubernetes, representing a single instance of a running process. It can hold one or more containers sharing the same network and storage.",
  example: "A main web application container and a helper log-forwarder container running together in one Pod.",
  crossQuestions: ["Can two containers in the same Pod share the same port?", "Why not just deploy containers directly?"]
},
{
  category: "Kubernetes",
  question: "What is a Deployment?",
  answer: "A Deployment is a resource that defines the desired state for your Pods, managing creating, scaling, and rolling updates of replicas.",
  example: "Specifying that you want 3 instances of your Node.js application running at all times.",
  crossQuestions: ["What happens to running Pods during a Deployment update?", "How do you roll back a Deployment?"]
},
{
  category: "Kubernetes",
  question: "What is a Service in K8s?",
  answer: "A Service is an abstraction layer that defines a logical set of Pods and a policy to access them, providing a stable IP address and DNS name.",
  example: "Allowing a frontend Pod to talk to a backend Pod via http://backend-service instead of tracking changing IP addresses.",
  crossQuestions: ["What are the different types of K8s Services?", "What is a Headless Service?"]
},
{
  category: "Kubernetes",
  question: "What is a ReplicaSet?",
  answer: "A ReplicaSet ensures that a specified number of identical Pod replicas are running at any given time.",
  example: "If you scale a application to 5 replicas, the ReplicaSet brings up 2 more if only 3 are currently active.",
  crossQuestions: ["Should you create ReplicaSets directly or via Deployments?", "How does a ReplicaSet know which Pods to manage?"]
},
{
  category: "Kubernetes",
  question: "What is a Namespace?",
  answer: "A Namespace provides a mechanism for isolating groups of resources within a single Kubernetes cluster.",
  example: "Dividing a single physical cluster into 'development', 'staging', and 'production' environments.",
  crossQuestions: ["Can Pods in different Namespaces talk to each other?", "Are all K8s resources namespace-scoped?"]
},
{
  category: "Kubernetes",
  question: "What is an Ingress?",
  answer: "Ingress is an API object that manages external access to services inside the cluster, typically providing HTTP/HTTPS routing, SSL termination, and load balancing.",
  example: "Routing external traffic hitting example.com/api to your backend service.",
  crossQuestions: ["What is an Ingress Controller?", "How does Ingress differ from a NodePort service?"]
},
{
  category: "Kubernetes",
  question: "What is a ConfigMap?",
  answer: "A ConfigMap is used to store non-confidential configuration data in key-value pairs, keeping configuration separate from application code.",
  example: "Storing database URLs or environment flags like LOG_LEVEL=debug.",
  crossQuestions: ["How do you inject a ConfigMap into a Pod?", "What happens if a ConfigMap is updated while a Pod is running?"]
},
{
  category: "Kubernetes",
  question: "What is a Secret?",
  answer: "A Secret is similar to a ConfigMap but specifically intended to hold sensitive data like passwords, OAuth tokens, and SSH keys, obfuscated in Base64.",
  example: "Storing database passwords or API private keys safely.",
  crossQuestions: ["Are K8s secrets encrypted by default?", "How can you securely manage secrets in production?"]
},
{
  category: "Kubernetes",
  question: "PersistentVolume (PV) vs PersistentVolumeClaim (PVC)?",
  answer: "A PV is a piece of storage provisioned by an administrator. A PVC is a request for storage by a user/Pod that consumes the PV.",
  example: "PV is an actual 50GB AWS EBS volume mapped in K8s; PVC is a developer asking for '10GB of storage' for their database Pod.",
  crossQuestions: ["What are the different access modes for a PV?", "What happens to the data on a PV when a PVC is deleted?"]
},
{
  category: "Kubernetes",
  question: "What is a DaemonSet?",
  answer: "A DaemonSet ensures that all (or some) Nodes run a single copy of a specific Pod.",
  example: "Running a log collection agent like Fluentd or a monitoring agent like Prometheus on every worker node.",
  crossQuestions: ["How does a DaemonSet differ from a Deployment?", "What happens when a new Node is added to the cluster?"]
},
{
  category: "Kubernetes",
  question: "What is a StatefulSet?",
  answer: "A StatefulSet manages deployment and scaling of a set of Pods while maintaining unique, persistent identities and stable networking names for each Pod.",
  example: "Deploying a database cluster like MongoDB or MySQL where the master and replicas need specific order and fixed storage names.",
  crossQuestions: ["Why can't you use a standard Deployment for database clusters?", "How are StatefulSet Pods named?"]
},
{
  category: "Kubernetes",
  question: "What is an Init Container?",
  answer: "An Init Container is a specialized container that runs and completes before the application containers in a Pod even start.",
  example: "Running a script that waits for a database service to be up and reachable before launching the main app backend.",
  crossQuestions: ["Can an Init Container fail? What happens if it does?", "Can a Pod have multiple Init Containers?"]
},
{
  category: "Kubernetes",
  question: "What is the Control Plane (Master Node)?",
  answer: "The Control Plane manages the Kubernetes cluster, making global decisions (like scheduling), detecting events, and responding to cluster events.",
  example: "The brain of the cluster containing components like etcd, api-server, controller-manager, and scheduler.",
  crossQuestions: ["Can a cluster run without a control plane?", "How do you achieve high availability for the control plane?"]
},
{
  category: "Kubernetes",
  question: "What is a Worker Node?",
  answer: "A Worker Node is a machine (VM or bare metal) that hosts and runs the actual application workloads (Pods) assigned by the control plane.",
  example: "An EC2 instance dedicated to running your frontend and backend containers inside the cluster.",
  crossQuestions: ["What key components run on a worker node?", "What happens if a worker node crashes?"]
},
{
  category: "Kubernetes",
  question: "What is the Kubelet?",
  answer: "The Kubelet is an agent that runs on each worker node, ensuring that containers described in PodSpecs are running and healthy.",
  example: "It talks directly to the container runtime (like Docker or containerd) to spin up or tear down containers.",
  crossQuestions: ["How does Kubelet communicate with the API server?", "What happens if Kubelet stops working on a node?"]
},
{
  category: "Kubernetes",
  question: "What is Kube-Proxy?",
  answer: "Kube-Proxy is a network proxy running on each node that maintains network rules, enabling communication to Pods from inside or outside the cluster.",
  example: "It configures IPVS or iptables rules on the machine to load balance traffic targeted at a Service IP across target Pods.",
  crossQuestions: ["Is Kube-Proxy responsible for Pod-to-Pod cross-node communication?", "What are its alternative modes?"]
},
{
  category: "Kubernetes",
  question: "What is etcd?",
  answer: "etcd is a distributed, consistent key-value store used as Kubernetes' secure backing store for all cluster data.",
  example: "It stores information about exactly which deployments exist, what pods are running, and their current states.",
  crossQuestions: ["Why is etcd's performance critical to K8s?", "How do you back up etcd data?"]
},
{
  category: "Kubernetes",
  question: "What is the API Server (kube-apiserver)?",
  answer: "The API Server exposes the Kubernetes API and serves as the front door for all management commands, communicating with users, CLI, and internal components.",
  example: "When you run a command via `kubectl`, it sends an HTTP POST request straight to the API Server.",
  crossQuestions: ["How does the API Server authenticate incoming requests?", "Does the scheduler talk directly to etcd?"]
},
{
  category: "Kubernetes",
  question: "Liveness Probe vs Readiness Probe?",
  answer: "A Liveness probe checks if a container needs a restart because it's deadlocked. A Readiness probe checks if a container is ready to accept web traffic.",
  example: "If an app crashes completely, Liveness restarts it. While an app is initializing and loading DB schemas, Readiness keeps it out of the Load Balancer.",
  crossQuestions: ["What is a Startup Probe?", "What happens if a Readiness probe fails repeatedly?"]
},
{
  category: "Kubernetes",
  question: "What is the Horizontal Pod Autoscaler (HPA)?",
  answer: "HPA automatically scales the number of Pods in a replication controller or deployment based on observed CPU utilization or custom metrics.",
  example: "If CPU usage spikes past 80% due to Black Friday traffic, HPA automatically spins up 5 more Pods.",
  crossQuestions: ["Where does HPA pull its metrics from?", "Can HPA scale Pods down to zero?"]
},
{
  category: "Kubernetes",
  question: "What is kubectl?",
  answer: "kubectl is the official command-line interface tool used to interact and execute commands against Kubernetes clusters.",
  example: "Running `kubectl get pods` to list your active application processes.",
  crossQuestions: ["Where does kubectl look for cluster configuration details?", "What is the default file path for Kubeconfig?"]
},
{
  category: "Kubernetes",
  question: "What is Minikube?",
  answer: "Minikube is an open-source tool that sets up a local, single-node Kubernetes cluster on your personal computer for testing and development.",
  example: "Testing out your deployment YAML configurations locally before pushing to AWS EKS.",
  crossQuestions: ["Can you run production workloads on Minikube?", "What are alternative options for local K8s testing?"]
},
{
  category: "Kubernetes",
  question: "What is a NodePort Service?",
  answer: "A NodePort service exposes the Service on each Node's IP at a static port (typically between 30000-32767), opening external access directly to that port.",
  example: "Accessing your app via http://<Node-IP>:31500.",
  crossQuestions: ["Why is NodePort not recommended for production traffic?", "How does ClusterIP relate to NodePort?"]
},
{
  category: "Kubernetes",
  question: "What is Node Affinity?",
  answer: "Node Affinity is a set of rules used to constrain which nodes your Pods are eligible to be scheduled on based on labels on those nodes.",
  example: "Ensuring a data science heavy workload Pod lands specifically on a node configured with GPU hardware.",
  crossQuestions: ["What is the difference between hard and soft node affinity?", "Taints and Tolerations vs Node Affinity?"]
},

// LINUX QUESTIONS (46–70)
{
  category: "Linux",
  question: "What is the Linux Kernel?",
  answer: "The kernel is the core software engine of the OS, acting as the bridge interface between computer hardware components and running software applications.",
  example: "When an app wants to read a file off an SSD, it requests the Kernel to fetch the raw data blocks.",
  crossQuestions: ["What is a shell compared to a kernel?", "What is a monolithic kernel?"]
},
{
  category: "Linux",
  question: "Root User vs Normal User?",
  answer: "The Root user is the absolute superuser administrative account with full system overwrite permissions. Normal users have restricted access isolated to their own home environments.",
  example: "Only root or users using sudo can modify configuration files stored inside the `/etc` directory.",
  crossQuestions: ["Why is it risky to log in directly as root?", "How do you lock the root account?"]
},
{
  category: "Linux",
  question: "How do you view file details including hidden files?",
  answer: "Use the `ls -la` command.",
  example: "Running `ls -la` in a project directory exposes the hidden `.git` folder and configuration permissions.",
  crossQuestions: ["What does the '.' and '..' represent in the command output?", "What does the first character '-' or 'd' mean in `ls -l`?"]
},
{
  category: "Linux",
  question: "How do you alter file access permissions?",
  answer: "Use the `chmod` command with octal values or symbolic notation.",
  example: "`chmod 755 script.sh` gives the owner read, write, and execute permissions, while others get read and execute permissions.",
  crossQuestions: ["What permission value does octal '644' represent?", "What does `chmod +x` do?"]
},
{
  category: "Linux",
  question: "How do you change file ownership?",
  answer: "Use the `chown` command.",
  example: "`sudo chown ubuntu:ubuntu app.log` changes the file owner and group to the user 'ubuntu'.",
  crossQuestions: ["Can a normal user change ownership of their own file to root?", "What flag is used to change directory ownership recursively?"]
},
{
  category: "Linux",
  question: "What is the purpose of 'sudo'?",
  answer: "'sudo' stands for Superuser Do. It lets authorized users run specific commands with administrative root permissions securely.",
  example: "Running `sudo apt-get update` to update system software index repositories safely.",
  crossQuestions: ["Where is the list of users allowed to use sudo configured?", "What is the difference between `sudo su` and `sudo`?"]
},
{
  category: "Linux",
  question: "How do you monitor live running system processes?",
  answer: "Use the `top` or `htop` interactive command tools.",
  example: "Opening `htop` to identify exactly which application container is hogging 99% of your server CPU capacity.",
  crossQuestions: ["How do you sort processes by memory usage in `top`?", "What is Load Average?"]
},
{
  category: "Linux",
  question: "How do you terminate a stuck process?",
  answer: "Use the `kill` command along with the unique Process ID (PID).",
  example: "`kill 1234` sends a graceful SIGTERM signal. `kill -9 1234` forces immediate termination via SIGKILL.",
  crossQuestions: ["What is the difference between SIGTERM (15) and SIGKILL (9)?", "How do you find a process ID using its name?"]
},
{
  category: "Linux",
  question: "How do you look up matching text lines inside a file?",
  answer: "Use the global regular expression print (`grep`) command engine.",
  example: "`grep \"ERROR\" application.log` filters and outputs only the log lines where errors occurred.",
  crossQuestions: ["How do you search recursively through folders using grep?", "How do you make grep case-insensitive?"]
},
{
  category: "Linux",
  question: "How do you discover file locations on disk?",
  answer: "Use the `find` search directory command.",
  example: "`find /var/log -name \"*.log\"` lists all log format files located under the `/var/log` system pathway.",
  crossQuestions: ["How do you use find to delete files older than 30 days?", "What is the difference between `find` and `locate`?"]
},
{
  category: "Linux",
  question: "What is SSH?",
  answer: "Secure Shell (SSH) is a cryptographic network protocol used for secure, encrypted remote command-line login access to servers.",
  example: "`ssh -i key.pem ubuntu@13.233.4.5` connects you securely to a remote AWS cloud machine.",
  crossQuestions: ["What is the default port for SSH?", "How do you disable password authentication for SSH?"]
},
{
  category: "Linux",
  question: "Soft link vs Hard link?",
  answer: "A Soft link (symbolic) is a shortcut pointer to another file path. A Hard link points directly to the underlying raw physical data sector (inode) on disk.",
  example: "Deleting the original source file breaks a Soft Link, but a Hard Link still retains the readable file contents.",
  crossQuestions: ["How do you create a symlink in Linux?", "Can hard links span across different file systems/drives?"]
},
{
  category: "Linux",
  question: "How do you check available disk space?",
  answer: "Use the disk free (`df -h`) and disk usage (`du -sh`) commands.",
  example: "`df -h` checks general drive capacity splits; `du -sh /var/log` counts the true size of the targeted log folder.",
  crossQuestions: ["What does the `-h` flag do in these commands?", "What happens if disk space is 100% full but `df` shows space left?"]
},
{
  category: "Linux",
  question: "How do you check remaining system RAM memory capacity?",
  answer: "Use the `free -m` or `free -h` commands.",
  example: "Running `free -h` to see how much RAM memory buffer space your new Java app installation is using up.",
  crossQuestions: ["What is Swap memory usage?", "What happens when Linux runs completely out of memory (OOM)?"]
},
{
  category: "Linux",
  question: "What is a Package Manager?",
  answer: "An automated software utility application engine responsible for installing, upgrading, and removing package binaries from online distro code pools.",
  example: "Using `apt` on Ubuntu distros, or `yum`/`dnf` on RedHat Enterprise/CentOS linux distros.",
  crossQuestions: ["What does `apt-get update` actually update?", "How do you uninstall a package completely along with configs?"]
},
{
  category: "Linux",
  question: "How do you view new incoming file logs in real-time?",
  answer: "Use the tail follow command wrapper `tail -f`.",
  example: "`tail -f /var/log/nginx/access.log` lets you watch incoming web traffic requests hit the server stream live.",
  crossQuestions: ["How do you view exactly the last 50 lines of a file?", "What is the counterpart command to `tail`?"]
},
{
  category: "Linux",
  question: "What is the purpose of the `/etc` directory?",
  answer: "The `/etc` directory is the central core system repository containing all host-specific configuration files and startup script settings.",
  example: "Modifying network mappings inside `/etc/hosts` or user groups inside `/etc/passwd`.",
  crossQuestions: ["Where are user home files stored compared to `/etc`?", "What is stored in `/var` vs `/etc`?"]
},
{
  category: "Linux",
  question: "What is a Cron Job?",
  answer: "A Cron job is an automated background task scheduled to execute commands or scripts at specific fixed times or intervals.",
  example: "Scheduling a bash script shell execution to back up databases every single night at exactly 2:00 AM.",
  crossQuestions: ["How do you open the cron editor settings?", "What does `* * * * *` format mean in cron expression syntax?"]
},
{
  category: "Linux",
  question: "Environment Variables vs Local Variables?",
  answer: "Environment variables are system-wide variables available to any sub-process shell. Local variables are only valid inside the current running shell script.",
  example: "The global `$PATH` environment variable tells Linux exactly where to look for binary commands.",
  crossQuestions: ["How do you make a local variable an environment variable?", "Where do you persist environment variables permanently?"]
},
{
  category: "Linux",
  question: "What does the pipe operator (`|`) execute?",
  answer: "The pipe operator redirects the standard data output stream of the left command directly as input into the right command.",
  example: "`history | grep ssh` routes your command history directly into a filter to locate previous ssh logins easily.",
  crossQuestions: ["Can you chain more than two commands using pipes?", "What is the difference between a pipe and redirection?"]
},
{
  category: "Linux",
  question: "Redirection operator `>` vs `>>`?",
  answer: "Both route output data streams to a file. `>` completely overwrites the target file data, whereas `>>` appends new strings to the bottom.",
  example: "`echo \"hello\" > file.txt` resets the document, while `echo \"world\" >> file.txt` appends it safely.",
  crossQuestions: ["How do you redirect standard error output (stderr) to a file?", "What does `2>&1` signify?"]
},
{
  category: "Linux",
  question: "How do you check open network socket ports?",
  answer: "Use the socket statistics (`ss`) or network statistics (`netstat`) commands.",
  example: "`ss -tuln` lists all active ports listening for connections on the host machine.",
  crossQuestions: ["What do the flags `-tuln` stand for?", "How do you verify if a specific port like 8080 is open?" ]
},
{
  category: "Linux",
  question: "What is systemd and systemctl?",
  answer: "systemd is the init system engine used to bootstrap user space and manage system processes. `systemctl` is the CLI tool used to control it.",
  example: "Running `sudo systemctl restart docker` to restart the Docker daemon process cleanly.",
  crossQuestions: ["How do you enable a service to start automatically on system boot?", "How do you check if a service is running?"]
},
{
  category: "Linux",
  question: "What is an Inode?",
  answer: "An inode is a metadata data structure on a Linux filesystem that stores details about a file (size, permissions, owner) except its actual name and data contents.",
  example: "Every file creation consumes at least one unique inode block reference inside disk storage indexes.",
  crossQuestions: ["Can you run out of inodes even if you have free disk space?", "How do you check inode utilization?"]
},
{
  category: "Linux",
  question: "What is the `/tmp` directory used for?",
  answer: "The `/tmp` directory holds temporary files created by the system or applications, which are usually deleted automatically on system reboot.",
  example: "An installer unpacking setup scripts that won't be needed once installation finishes.",
  crossQuestions: ["Who can write data into `/tmp`?", "How does `/tmp` differ from `/var/tmp`?"]
},

// LINUX ADVANCED QUESTIONS (71–85)
{
  category: "Linux Advanced",
  question: "What is a Zombie Process vs an Orphan Process?",
  answer: "A Zombie is a process that has completed execution but still has an entry in the process table because its parent hasn't read its exit status. An Orphan is a process whose parent has died, and it is adopted by the 'init' process (PID 1).",
  example: "A web server thread finishes but the master process hangs without clearing it (Zombie). A background script keeps running after you close the terminal window (Orphan).",
  crossQuestions: ["How do you clean up a Zombie process?", "Does a Zombie process consume CPU or RAM?"]
},
{
  category: "Linux Advanced",
  question: "What do the three numbers in a 'Load Average' represent?",
  answer: "They represent the average system load over the last 1 minute, 5 minutes, and 15 minutes, measuring CPU demand and disk I/O wait times.",
  example: "A load average of '4.00, 2.00, 0.50' on a 2-core CPU means the system is heavily overloaded right now, but was running smoothly 15 minutes ago.",
  crossQuestions: ["How do you know if a load average is too high for your specific server?", "Does high load average always mean high CPU usage?"]
},
{
  category: "Linux Advanced",
  question: "What are Cgroups and Namespaces under the hood?",
  answer: "Namespaces provide isolation (making a process think it has its own network, mount points, and PIDs). Cgroups (Control Groups) enforce resource limits like CPU, memory, and disk I/O.",
  example: "Docker relies directly on Linux Namespaces to isolate container traffic and Cgroups to restrict a container to 1GB of RAM.",
  crossQuestions: ["Name three types of Linux namespaces.", "What happens if a process exceeds its Cgroup memory limit?"]
},
{
  category: "Linux Advanced",
  question: "What is the '/proc' directory?",
  answer: "It is a virtual, pseudo-filesystem generated by the kernel in real-time, containing detailed parameters and statistics about running processes and hardware configurations.",
  example: "Running `cat /proc/cpuinfo` lets you view your server's physical processor architecture directly.",
  crossQuestions: ["Are files inside `/proc` actually stored on the hard drive?", "How do you check a specific process's environment variables inside `/proc`?"]
},
{
  category: "Linux Advanced",
  question: "What does the 'strace' command do?",
  answer: "It intercepts and records the system calls made by a process and the signals it receives, making it highly valuable for deep debugging.",
  example: "`strace -p 1234` tracks exactly which files a stuck background application is trying to open or read.",
  crossQuestions: ["What is the performance impact of running strace on a production process?", "How does `lsof` differ from `strace`?"]
},
{
  category: "Linux Advanced",
  question: "What is Memory Swappiness?",
  answer: "Swappiness is a kernel parameter (valued 0 to 100) that controls how aggressively the Linux kernel moves processes out of physical RAM and into the Swap space on the disk.",
  example: "Setting swappiness to 10 tells the kernel to avoid swapping unless absolutely necessary, keeping database performance fast.",
  crossQuestions: ["How do you temporarily change the swappiness value?", "Where do you persist the swappiness configuration permanently?"]
},
{
  category: "Linux Advanced",
  question: "What are SUID, SGID, and the Sticky Bit?",
  answer: "They are special permission flags. SUID lets a file execute with the permissions of the file owner. SGID inherits group permissions. The Sticky Bit restricts file deletion within a folder to only the file's owner.",
  example: "The `/tmp` directory uses the Sticky Bit so users cannot accidentally delete each other's temporary files.",
  crossQuestions: ["What is the numerical value representing the Sticky Bit?", "Why is setting SUID on custom scripts considered a security risk?"]
},
{
  category: "Linux Advanced",
  question: "rsync vs scp?",
  answer: "Both transfer files over SSH. `scp` unconditionally copies the entire file file-by-file. `rsync` uses a delta algorithm to transfer only changed blocks, allowing it to sync directories incrementally.",
  example: "Syncing a 10GB log folder daily takes seconds with `rsync` because it only pushes today's new log additions.",
  crossQuestions: ["Which flag preserves file permissions and timestamps in rsync?", "How do you resume a broken download using rsync?"]
},
{
  category: "Linux Advanced",
  question: "What is LVM (Logical Volume Management)?",
  answer: "LVM is a storage management framework that pools physical hard drives into flexible logical volumes, letting you resize partitions dynamically without unmounting storage.",
  example: "Adding a new 50GB AWS EBS volume to a server and extending the existing root `/` partition on the fly without rebooting.",
  crossQuestions: ["What are Physical Volumes (PV), Volume Groups (VG), and Logical Volumes (LV)?", "Can you safely shrink an active LVM partition?"]
},
{
  category: "Linux Advanced",
  question: "How do you troubleshoot network packet drops on a Linux box?",
  answer: "Use core tools like `ping` for basic reachability, `traceroute` to locate hop failures, and `tcpdump` to capture and inspect live network packet payloads.",
  example: "Running `tcpdump -i eth0 port 80` to check if HTTP traffic is reaching your network card interface.",
  crossQuestions: ["How do you save a tcpdump capture to a file for Wireshark analysis?", "What does a 'Connection Refused' error usually mean vs a timeout?"]
},
{
  category: "Linux Advanced",
  question: "What happens when an inode exhaustion occurs?",
  answer: "The filesystem runs out of index pointers to track files. You will be blocked from creating any new files or directories, even if `df -h` shows plenty of free gigabytes on the disk.",
  example: "An application creates millions of empty 0-KB temporary files until the system errors out with 'No space left on device'.",
  crossQuestions: ["How do you check inode capacity levels?", "How do you quickly locate folders containing massive numbers of files?"]
},
{
  category: "Linux Advanced",
  question: "What is the difference between Hard Limits and Soft Limits?",
  answer: "A Soft Limit is a threshold warning limit that users can temporarily increase themselves. A Hard Limit is the strict ceiling set by root that cannot be exceeded.",
  example: "Configuring a soft limit of 1024 open files for an application user, with a hard limit cap of 4096.",
  crossQuestions: ["Which command sets or views these operational limits?", "Where are persistent user resource limits configured?"]
},
{
  category: "Linux Advanced",
  question: "journald vs traditional syslog?",
  answer: "Traditional syslog writes logs as plain unstructured text strings. `journald` is a systemd tool that captures logs in a secure, structured binary format, allowing fast filtering by metadata.",
  example: "Using `journalctl -u docker.service --since '1 hour ago'` to rapidly filter container engine events.",
  crossQuestions: ["How do you view live log streams using journalctl?", "Where does journald store its binary log files?"]
},
{
  category: "Linux Advanced",
  question: "What is RAID and how do RAID 0, 1, and 5 differ?",
  answer: "RAID pools multiple hard drives for performance or redundancy. RAID 0 stripes data across drives for pure speed (no backup). RAID 1 mirrors data for safety. RAID 5 stripes data along with distributed parity blocks for a balance of speed and fault tolerance.",
  example: "Production database servers utilize RAID 10 or RAID 5 to avoid data loss if a physical drive fails.",
  crossQuestions: ["How many drive failures can a RAID 5 array survive?", "Why is RAID not a substitute for standard system backups?"]
},
{
  category: "Linux Advanced",
  question: "What are the stages of the Linux boot process?",
  answer: "1. BIOS/UEFI initializes hardware. 2. GRUB bootloader loads into RAM. 3. Kernel mounts root filesystem. 4. `systemd` (PID 1) initiates system services.",
  example: "If a server gets stuck before displaying a login prompt after an upgrade, the kernel or GRUB configuration is usually broken.",
  crossQuestions: ["What is the purpose of the initramfs stage?", "How do you enter single-user emergency mode during boot?"]
},

// JENKINS QUESTIONS (86–100)
{
  category: "Jenkins",
  question: "What is Jenkins and why is it used?",
  answer: "Jenkins is an open-source automation server used to implement CI/CD pipelines, automating the building, testing, and deployment phases of software.",
  example: "When a developer pushes code to GitHub, Jenkins catches it, runs unit tests, builds a Docker image, and deploys it to AWS.",
  crossQuestions: ["What is Continuous Integration vs Continuous Deployment?", "What are alternative tools to Jenkins?"]
},
{
  category: "Jenkins",
  question: "Declarative vs Scripted Pipelines?",
  answer: "Declarative pipelines use a strict, structured syntax wrapped in a `pipeline {}` block, making them simpler and cleaner. Scripted pipelines use Groovy code blocks, offering maximum code flexibility but higher complexity.",
  example: "90% of modern teams write Declarative pipelines for easier maintenance and structure.",
  crossQuestions: ["Which section in a Declarative pipeline handles cleanups?", "Can you run arbitrary Groovy code inside a Declarative pipeline?"]
},
{
  category: "Jenkins",
  question: "What is a Jenkinsfile?",
  answer: "A Jenkinsfile is a text file that contains the entire definition of a Jenkins pipeline written as code, stored directly inside your application project repository.",
  example: "Putting a `Jenkinsfile` at the root of your Git repo enables automated, version-controlled pipeline definitions.",
  crossQuestions: ["What is the advantage of keeping pipeline configuration as code?", "How do you validate a Jenkinsfile syntax without running a build?"]
},
{
  category: "Jenkins",
  question: "Explain Jenkins Master-Agent Architecture.",
  answer: "The Jenkins Master handles the UI, configurations, and schedules jobs. The Agents (Slaves) execute the actual build steps requested by the master, allowing builds to scale horizontally.",
  example: "The Master node schedules a heavy iOS build to run on an external Mac-mini agent node while a Java build runs on a Linux agent node.",
  crossQuestions: ["How does a Master connect to an Agent node securely?", "Why shouldn't you run production builds on the Master node?"]
},
{
  category: "Jenkins",
  question: "What is a Multibranch Pipeline?",
  answer: "A Multibranch Pipeline automatically discovers and creates individual build jobs for every single branch inside your Git repository that contains a Jenkinsfile.",
  example: "Pushing a `feature-login` branch automatically triggers a dedicated testing pipeline for that branch without manual Jenkins setup.",
  crossQuestions: ["How does Jenkins handle a branch deletion in a Multibranch setup?", "Can you use different build configurations per branch?"]
},
{
  category: "Jenkins",
  question: "How do GitHub Webhooks integrate with Jenkins?",
  answer: "A Webhook is an HTTP POST notification sent by GitHub to Jenkins immediately when a repository event occurs (like a code push or PR creation).",
  example: "Instead of Jenkins constantly checking Git every minute, GitHub instantly alerts Jenkins the second a push happens, starting the build instantly.",
  crossQuestions: ["What is the alternative to using webhooks?", "What port does Jenkins need exposed to receive public webhooks?"]
},
{
  category: "Jenkins",
  question: "How do you safely handle credentials in Jenkins?",
  answer: "Store secrets globally inside the Jenkins Credentials Provider. You can then inject them safely into your pipelines as masked environment variables without exposing plain text in your code.",
  example: "Using `withCredentials` blocks to load Docker Hub passwords during image pushing phases securely.",
  crossQuestions: ["Can a user see a stored password by printing it in a pipeline echo?", "What types of secrets can Jenkins store?"]
},
{
  category: "Jenkins",
  question: "What are Plugins in Jenkins?",
  answer: "Plugins are modular extensions that integrate Jenkins with external software tools, cloud ecosystems, and testing frameworks.",
  example: "Installing the 'AWS Steps' plugin to gain direct access to built-in commands like `withAWS` inside pipeline scripts.",
  crossQuestions: ["What happens if you install an incompatible plugin update?", "How do you back up Jenkins plugin configurations?"]
},
{
  category: "Jenkins",
  question: "What are 'Post' actions in a Jenkins pipeline?",
  answer: "The `post` section defines steps that run at the end of a pipeline execution based on the final build status (like `always`, `success`, `failure`, or `changed`).",
  example: "Configuring a `failure` block to automatically trigger Slack notifications to developers when a build crashes.",
  crossQuestions: ["What is the difference between `always` and `cleanup` blocks?", "Can you have nested conditions inside a post block?"]
},
{
  category: "Jenkins",
  question: "What are Jenkins Shared Libraries?",
  answer: "Shared Libraries are external repositories containing reusable Groovy script blocks that can be loaded into multiple pipelines to eliminate duplicate code blocks.",
  example: "Writing a single, centralized Slack notification template function used across 50 independent microservice pipelines.",
  crossQuestions: ["How do you import a shared library into a Jenkinsfile?", "What directory structure does a Shared Library require?"]
},
{
  category: "Jenkins",
  question: "What is a Parameterized Build?",
  answer: "It allows a pipeline to accept custom, user-defined inputs (like strings, booleans, or choices) before starting a execution.",
  example: "Adding a dropdown parameter to choose whether to deploy your application to 'staging' or 'production'.",
  crossQuestions: ["Can you trigger a parameterized build using a Webhook or API call?", "How do you define default parameter fallbacks?"]
},
{
  category: "Jenkins",
  question: "Poll SCM vs Webhook?",
  answer: "Poll SCM makes Jenkins actively query the Git repository at scheduled cron intervals to look for changes. A Webhook lets Git push real-time alerts directly to Jenkins.",
  example: "Webhooks are faster and place far less network load on your internal Git servers compared to constant polling cycles.",
  crossQuestions: ["When would you be forced to use Poll SCM over a Webhook?", "What is the syntax configuration for polling every 15 minutes?"]
},
{
  category: "Jenkins",
  question: "What is Blue Ocean?",
  answer: "Blue Ocean is an alternative visual user interface plugin for Jenkins that displays pipelines as clear, interactive graphical visual paths for easier tracking.",
  example: "Using Blue Ocean to quickly pinpoint which specific parallel integration testing block threw an exception.",
  crossQuestions: ["Does Blue Ocean replace standard Jenkins pipeline code?", "Can you edit pipelines visually inside Blue Ocean?"]
},
{
  category: "Jenkins",
  question: "How do you handle build artifacts in Jenkins?",
  answer: "Use the `archiveArtifacts` step to save specific output files (like .jar, .war, or zip files) directly onto the Jenkins controller filesystem for easy down-the-line reference.",
  example: "Archiving compiled production binaries so QA teams can download and manually inspect them directly from the UI.",
  crossQuestions: ["Why is it a bad idea to store artifacts indefinitely on Jenkins?", "What external tools are preferred for storing production artifacts?"]
},
{
  category: "Jenkins",
  question: "How do you backup and restore Jenkins?",
  answer: "Jenkins stores all its core settings, jobs, configurations, and build histories inside a single directory pathway called `$JENKINS_HOME`. Backing up this directory backs up your instance.",
  example: "Creating a daily cron job that archives and copies the `$JENKINS_HOME` file tree over to a secure AWS S3 bucket.",
  crossQuestions: ["Do you need to back up the actual workspace folders to restore configurations?", "Can you use plugins to automate Jenkins backups?"]
},

// TERRAFORM QUESTIONS (101–115)
{
  category: "Terraform",
  question: "What is Terraform and how does it work?",
  answer: "Terraform is an open-source Infrastructure as Code (IaC) tool created by HashiCorp. It uses declarative configuration files (HCL) to safely provision and version infrastructure across multiple cloud providers.",
  example: "Writing a text file to launch 3 EC2 instances, a VPC, and an RDS database instead of manually clicking around the AWS Console.",
  crossQuestions: ["What does it mean that Terraform is cloud-agnostic?", "What language is used to write Terraform files?"]
},
{
  category: "Terraform",
  question: "What is the Terraform State file?",
  answer: "The state file (`terraform.tfstate`) is a JSON file that acts as Terraform's source of truth, mapping your written configuration blocks directly to real-world cloud resources.",
  example: "If you change an instance type in your code, Terraform reads the state file to check what type is currently deployed before making changes.",
  crossQuestions: ["Why should you never modify the state file manually?", "Does the state file contain sensitive information?"]
},
{
  category: "Terraform",
  question: "What is State Locking and why is it crucial?",
  answer: "State locking automatically blocks multiple developers from running Terraform operations on the same architecture at the exact same time, preventing state file corruption.",
  example: "Using an AWS DynamoDB table alongside S3 to lock the state file while you run an infrastructure update.",
  crossQuestions: ["What happens if a Terraform execution crashes midway through a locked operation?", "Which command overrides a stuck state lock manually?"]
},
{
  category: "Terraform",
  question: "Declarative vs Imperative IaC tools?",
  answer: "Declarative tools (like Terraform) focus on the desired final state; you define *what* you want, and the tool builds it. Imperative tools (like Ansible or scripts) require you to write the step-by-step commands for *how* to build it.",
  example: "If you tell Terraform 'I want 5 instances', it checks your current count and adds or removes instances automatically to hit exactly 5.",
  crossQuestions: ["Is AWS CloudFormation declarative or imperative?", "What happens if a resource is deleted manually outside a declarative tool?"]
},
{
  category: "Terraform",
  question: "What are Terraform Providers?",
  answer: "Providers are plugins that translate Terraform's standard code blocks into native API calls that individual cloud platforms or services understand.",
  example: "The `aws` provider translates your code into AWS API calls, while the `kubernetes` provider talks directly to your cluster API.",
  crossQuestions: ["Where does Terraform download providers from during initialization?", "Can you write custom Terraform providers?"]
},
{
  category: "Terraform",
  question: "What are Terraform Modules?",
  answer: "Modules are self-contained packages of Terraform configurations grouped together, allowing you to create reusable, standardized components across environments.",
  example: "Creating a single 'vpc-production' module block and reusing it with different variables to spin up Dev, Staging, and Prod networks.",
  crossQuestions: ["What is the difference between a root module and a child module?", "Where can modules be sourced from?"]
},
{
  category: "Terraform",
  question: "Variables vs Locals?",
  answer: "Variables (`variable`) act as input arguments passed into a module from the outside. Locals (`local`) are internal private constants scoped within the file, functioning like standard local programming variables.",
  example: "Using a variable for environment names (`dev`, `prod`) and a local block to construct a standardized naming tag prefix combining both values.",
  crossQuestions: ["How can you pass values into a input variable on the command line?", "Can locals change value mid-execution?"]
},
{
  category: "Terraform",
  question: "Explain: init, plan, apply, and destroy.",
  answer: "`init` initializes the working directory and downloads required provider plugins. `plan` previews changes without executing them. `apply` executes the infrastructure changes. `destroy` tears down all resources defined in your files.",
  example: "Running `terraform plan` during a pull request review to verify exactly what resources will be added or destroyed before deployment.",
  crossQuestions: ["Does `terraform plan` mutate your live infrastructure?", "How do you skip the manual interactive confirmation prompt during an apply?"]
},
{
  category: "Terraform",
  question: "What is a Remote Backend?",
  answer: "A remote backend determines where Terraform stores its state file, moving it off your local laptop and saving it to a shared cloud storage service like AWS S3 or HashiCorp Cloud for team collaboration.",
  example: "Configuring an S3 backend so all developers on your team are pulling from and updating the exact same infrastructure tracking state file.",
  crossQuestions: ["Name three supported remote backend types.", "How do you migrate local state files over to a remote backend?"]
},
{
  category: "Terraform",
  question: "What are Data Sources?",
  answer: "Data sources let Terraform query and fetch read-only information from resources that were created outside of your current Terraform workspace.",
  example: "Fetching the latest official Ubuntu AMI ID directly from AWS to use as the base image for an EC2 resource block.",
  crossQuestions: ["How does a Data Source block differ from a Resource block syntax?", "Can a data source block modify infrastructure?"]
},
{
  category: "Terraform",
  question: "What do Outputs do?",
  answer: "Outputs function like return values in programming, printing specific infrastructure information to the terminal screen after an apply or sharing them with other modules.",
  example: "Outputting the public IP address of a newly created load balancer so you know exactly where to point your browser.",
  crossQuestions: ["How do you query output values directly via the CLI?", "Can you mark an output as sensitive to hide it from the console logs?"]
},
{
  category: "Terraform",
  question: "What is 'Drift' and how do you fix it?",
  answer: "Drift occurs when resources are manually changed directly inside the cloud console (e.g., someone adds a firewall rule manually), throwing them out of sync with your written code.",
  example: "Running `terraform plan` automatically detects the console change, and running `terraform apply` overwrites the manual edit to match your code.",
  crossQuestions: ["Which command updates the state file with physical realities without applying code changes?", "How do you completely ignore specific drift changes?"]
},
{
  category: "Terraform",
  question: "What does `terraform taint` do?",
  answer: "It marks a specific resource as degraded or broken, forcing Terraform to completely destroy and recreate that resource from scratch during the next apply cycle.",
  example: "Tainting an EC2 instance that had a corrupt application configuration to force a clean rebuild.",
  crossQuestions: ["What replaced `terraform taint` in newer Terraform versions?", "Does tainting a resource destroy it immediately?"]
},
{
  category: "Terraform",
  question: "How do you handle resource dependencies in Terraform?",
  answer: "Terraform builds a dependency graph and determines the order of operations automatically by analyzing references. You can force explicit dependencies using the `depends_on` parameter.",
  example: "An EC2 instance automatically waits for its underlying security group to finish building first. If it needs an S3 bucket configuration initialized first, you add `depends_on = [aws_s3_bucket.data]`.",
  crossQuestions: ["What is an implicit dependency vs an explicit dependency?", "What happens if you introduce a circular dependency in your configurations?"]
},
{
  category: "Terraform",
  question: "How do you target specific resources during an execution?",
  answer: "Use the `-target` flag along with the full resource identifier path to isolate actions to a single block.",
  example: "`terraform apply -target=aws_instance.web_server` updates only that specific server block while leaving the rest of the file untouched.",
  crossQuestions: ["Why is using the `-target` flag generally discouraged for normal operations?", "Can you pass multiple targets inside a single execution command?"]
},

// GIT QUESTIONS (131–145)
{
  category: "Git",
  question: "What is Git and how does it differ from SVN?",
  answer: "Git is a distributed version control system where every developer has a full copy of the repository history locally. SVN is centralized, meaning developers must connect to a single central server to access history or commit changes.",
  example: "With Git, you can commit changes, view logs, and create branches while entirely offline on an airplane.",
  crossQuestions: ["What is a distributed workflow?", "Where does Git store its local metadata?"]
},
{
  category: "Git",
  question: "What is the difference between Git Fetch and Git Pull?",
  answer: "Git Fetch downloads the latest changes from the remote repository to your local machine but does not merge them into your working code. Git Pull does a Git Fetch followed immediately by a Git Merge.",
  example: "Run `git fetch` to see what your team has been working on safely without altering your current code files.",
  crossQuestions: ["Why is running git fetch safer than git pull?", "How do you configure git pull to always use rebase?"]
},
{
  category: "Git",
  question: "Git Merge vs Git Rebase?",
  answer: "Merge combines branches by creating a brand new 'merge commit' that preserves the historical timeline of both branches. Rebase moves or reapplies a sequence of commits on top of a new base commit, creating a perfectly linear history.",
  example: "Using rebase to update your feature branch with the latest main branch changes keeps the project history clean and free of messy merge commits.",
  crossQuestions: ["What is the golden rule of Git Rebase?", "How do you abort a rebase if things go wrong?"]
},
{
  category: "Git",
  question: "What is Git Stash and when do you use it?",
  answer: "Git Stash temporarily saves your uncommitted modifications (tracked and untracked files) to a clean working directory, letting you switch branches without making a messy half-done commit.",
  example: "You are midway through coding a feature when a production bug breaks. You run `git stash`, fix the bug on the main branch, switch back, and run `git stash pop`.",
  crossQuestions: ["How do you stash untracked files?", "How do you view a list of all items currently in your stash storage?"]
},
{
  category: "Git",
  question: "Git Reset vs Git Revert?",
  answer: "Git Reset moves the current branch pointer backward in time, effectively erasing commits from the history. Git Revert creates a brand new commit that applies the exact opposite changes of a specific target commit, preserving history safely.",
  example: "Use `git revert` on a shared public production branch to undo a bad commit without breaking the history for other developers.",
  crossQuestions: ["What is the difference between git reset --soft and --hard?", "Can you undo a git reset --hard operation?"]
},
{
  category: "Git",
  question: "What is a Merge Conflict and how do you resolve it?",
  answer: "A merge conflict occurs when Git cannot automatically determine changes because two different branches modified the exact same line in the same file.",
  example: "Developer A changes line 10 to 'X' and Developer B changes line 10 to 'Y'. Git stops the merge, highlights the lines, and waits for you to choose which change to keep.",
  crossQuestions: ["Which tools can help you visualize and fix merge conflicts?", "How do you abort an active merge conflict state?"]
},
{
  category: "Git",
  question: "What is Git Squash (Squash and Merge)?",
  answer: "Squashing combines all individual commits from a feature branch into a single, comprehensive commit before merging it into the main branch.",
  example: "Instead of cluttering the main branch with 15 tiny commits like 'fixed typo' or 'testing again', squashing turns them into a clean single commit titled 'Feature: Added user login functionality'.",
  crossQuestions: ["Can you squash commits interactively during a rebase?", "What is a disadvantage of squashing commits?"]
},
{
  category: "Git",
  question: "What is the purpose of the '.gitignore' file?",
  answer: "It tells Git which files or directories to intentionally ignore and avoid tracking in the repository.",
  example: "Adding `node_modules/`, `.env`, and `target/` to the file so you don't accidentally upload heavy dependencies or private application secrets to GitHub.",
  crossQuestions: ["What happens if you add a file to .gitignore that is already tracked by Git?", "How do you clear the Git cache to force it to respect a new ignore rule?"]
},
{
  category: "Git",
  question: "What is Git Reflog?",
  answer: "Reflog (Reference Logs) is a local safety-net log system that tracks every single change made to the heads of repositories, including deleted commits or aborted rebases.",
  example: "If you run `git reset --hard` and accidentally wipe out three days of unpushed commits, `git reflog` can find the exact commit hash to restore them.",
  crossQuestions: ["Are reflog entries pushed up to remote servers like GitHub?", "How long do reflog entries persist locally before being garbage collected?"]
},
{
  category: "Git",
  question: "What does 'git cherry-pick' do?",
  answer: "It lets you select a single, specific commit from one branch and apply it as a new commit onto your current working branch.",
  example: "A critical bug fix was committed to a development branch. Instead of merging the entire unstable branch, you cherry-pick just that single hotfix commit straight into production.",
  crossQuestions: ["What happens if a cherry-picked commit creates a conflict?", "Can you cherry-pick a range of commits?"]
},
{
  category: "Git",
  question: "Forking vs Cloning a repository?",
  answer: "Forking creates an entirely independent copy of someone else's repository under your personal GitHub profile account. Cloning downloads a local copy of a target repository directly onto your laptop.",
  example: "You fork an open-source project on GitHub to make custom tweaks, then clone your fork locally to write the code.",
  crossQuestions: ["How do you keep a forked repository synced with the original upstream repository?", "Does forking consume local disk space?"]
},
{
  category: "Git",
  question: "What is the HEAD pointer in Git?",
  answer: "HEAD is a reference pointer that indicates your current active location in the repository history—usually pointing to the latest commit on your active branch.",
  example: "Switching from the main branch to a feature branch moves the HEAD pointer to point to the tip of that feature branch.",
  crossQuestions: ["What does a 'detached HEAD' state mean?", "How do you fix a detached HEAD state?"]
},
{
  category: "Git",
  question: "What is a Git Hook?",
  answer: "Git Hooks are custom scripts that trigger automatically before or after specific Git actions take place (like committing, pushing, or receiving code).",
  example: "A `pre-commit` hook that automatically runs a code linter or unit tests to block you from committing broken syntax code.",
  crossQuestions: ["Where are local Git Hooks stored in a repository?", "Can you bypass a pre-commit hook if you are in a rush?"]
},
{
  category: "Git",
  question: "What is the three-tree architecture of Git?",
  answer: "Git manages files across three distinct states: the Working Directory (your local files on disk), the Staging Area/Index (files prepared for the next commit), and the Git Directory/Repository (permanently committed history snapshots).",
  example: "Editing a file puts it in the Working Directory. Running `git add` moves it to the Staging Area. Running `git commit` moves it to the Repository.",
  crossQuestions: ["How do you remove a file from the staging area without erasing your edits?", "What command displays changes between working files and staged files?"]
},
{
  category: "Git",
  question: "What is a Fast-Forward Merge?",
  answer: "A fast-forward merge occurs when the target branch has no new commits since the feature branch was created, allowing Git to simply slide the branch pointer forward without generating a merge commit.",
  example: "Merging a feature branch into a main branch that hasn't received any concurrent updates from other team members.",
  crossQuestions: ["How do you force Git to create a merge commit even if a fast-forward is possible?", "Why would a team want to disable fast-forward merges?"]
},

// MONITORING QUESTIONS (146–160)
{
  category: "Monitoring",
  question: "Monitoring vs Logging?",
  answer: "Monitoring tracks high-level quantitative system metrics (CPU, memory, request counts) in real-time to alert you *when* a system is failing. Logging records detailed string event histories to help you debug *why* it failed.",
  example: "Prometheus alerts you that traffic latency has spiked (Monitoring). You read the Nginx files to find database timeout error strings (Logging).",
  crossQuestions: ["Can you convert log strings into metrics?", "Which tools handle metrics collection vs log aggregation?"]
},
{
  category: "Monitoring",
  question: "What is Prometheus and how does it gather metrics?",
  answer: "Prometheus is an open-source monitoring tool that collects time-series metrics using a **pull model** over HTTP, scraping data endpoints exposed by applications at regular intervals.",
  example: "Prometheus scrapes http://my-app:8080/metrics every 15 seconds to fetch the latest application memory utilization values.",
  crossQuestions: ["What is the alternative to a pull-based monitoring model?", "What component handles short-lived push jobs in Prometheus?"]
},
{
  category: "Monitoring",
  question: "What is Grafana and how does it relate to Prometheus?",
  answer: "Grafana is an open-source data visualization tool. It connects directly to data sources like Prometheus to display metrics in interactive, custom dashboard charts.",
  example: "Prometheus acts as the database holding raw metrics numbers, while Grafana runs the frontend UI that turns those numbers into graphs.",
  crossQuestions: ["Can Grafana pull data from multiple databases simultaneously?", "How do you configure alerts directly inside Grafana charts?"]
},
{
  category: "Monitoring",
  question: "What are the four core metric types in Prometheus?",
  answer: "Counter (monotonically increasing value that only resets to 0), Gauge (a variable value that can go up or down), Histogram (samples observations and counts them in buckets), and Summary (calculates configurable quantiles over time).",
  example: "Tracking total requests uses a Counter. Tracking active memory usage uses a Gauge.",
  crossQuestions: ["Why would you use a Histogram instead of a Counter for tracking request latency?", "Can a Counter ever decrease naturally?"]
},
{
  category: "Monitoring",
  question: "What is the ELK/EFK Stack?",
  answer: "It is a popular centralized log aggregation suite consisting of Elasticsearch (search/index engine), Logstash or Fluentd/FluentBit (log processors and shippers), and Kibana (frontend dashboard visualizer).",
  example: "Collecting logs from 50 scattered Docker containers, parsing them cleanly, and searching them from a single Kibana query box.",
  crossQuestions: ["What makes Fluentd preferred over Logstash in modern container workloads?", "Is Elasticsearch a relational database?"]
},
{
  category: "Monitoring",
  question: "What are SLIs, SLOs, and SLAs?",
  answer: "An SLI (Service Level Indicator) is a real-time metric measuring performance. An SLO (Service Level Objective) is the target goal set for that metric. An SLA (Service Level Agreement) is the legal contract detailing penalties if the target is missed.",
  example: "SLI: Real-time availability is 99.5%. SLO: Target availability is 99.9%. SLA: We guarantee 99.0% availability or we refund our corporate clients.",
  crossQuestions: ["Who defines an SLO vs an SLA?", "What is an Error Budget?"]
},
{
  category: "Monitoring",
  question: "What is the Prometheus Node Exporter?",
  answer: "Node Exporter is a lightweight monitoring agent that runs on Linux hosts to capture and expose core hardware and OS metrics like disk space, RAM, and CPU usage.",
  example: "Installing Node Exporter on an EC2 instance so Prometheus can monitor the machine's underlying physical disk utilization.",
  crossQuestions: ["Does Node Exporter monitor custom application code metrics?", "What port does Node Exporter use by default?"]
},
{
  category: "Monitoring",
  question: "Blackbox vs Whitebox Monitoring?",
  answer: "Whitebox monitoring looks at the internal states of a system using logs and internal metrics. Blackbox monitoring tests the system completely from the outside, checking for behavior like user-facing accessibility.",
  example: "Checking application heap memory size is Whitebox. Pinging the login page over HTTP to verify it returns a 200 OK status code is Blackbox.",
  crossQuestions: ["Which tool in the Prometheus ecosystem handles blackbox probing?", "Why are both types necessary for a complete monitoring setup?"]
},
{
  category: "Monitoring",
  question: "What is Alertmanager in Prometheus?",
  answer: "Alertmanager handles routing, deduplicating, grouping, and silencing alerts sent from Prometheus, sending them out to tools like Slack, PagerDuty, or Email.",
  example: "Grouping 50 individual 'Node Down' alerts from a failing cluster into a single consolidated notification sent to the on-call engineer's phone.",
  crossQuestions: ["What is the difference between alert inhibition and silencing?", "Where are alert routing rules configured?"]
},
{
  category: "Monitoring",
  question: "What is Distributed Tracing?",
  answer: "Distributed Tracing tracks individual user requests as they travel across multiple microservices and networks, mapping the journey from frontend to databases.",
  example: "Using tools like Jaeger or Zipkin to pinpoint that a slow webpage load is caused by a specific database query hidden deep in service #4.",
  crossQuestions: ["What is a Span ID vs a Trace ID in distributed tracing?", "How does tracing differ from standard logging?"]
},
{
  category: "Monitoring",
  question: "What is APM (Application Performance Monitoring)?",
  answer: "APM tools provide deep code-level visibility into your running application, measuring execution times, trace errors, code performance, and dependency bottlenecks.",
  example: "Using Datadog or New Relic to find exactly which line of Java code is causing memory leaks or slow page renders.",
  crossQuestions: ["What is the performance overhead of running an APM agent inside an app?", "Can Prometheus function as a code-level APM?"]
},
{
  category: "Monitoring",
  question: "What is Synthetic Monitoring?",
  answer: "Synthetic monitoring simulates predictable user behaviors and workflows on an automated schedule from various global locations to test application uptime.",
  example: "Running a script every 5 minutes that simulates logging into your app, adding an item to a cart, and checking out to verify the flow works perfectly.",
  crossQuestions: ["How does synthetic monitoring differ from real-user monitoring (RUM)?", "Can synthetic monitoring predict sudden traffic spikes?"]
},
{
  category: "Monitoring",
  question: "What is Log Rotation and why is it important?",
  answer: "Log rotation is a process that archives, compresses, or deletes old log files systematically to prevent them from filling up a server's entire hard drive storage.",
  example: "Using the Linux utility `logrotate` to compress application logs daily and delete files older than 30 days.",
  crossQuestions: ["What happens to a running application if its log directory runs completely out of disk space?", "Where is logrotate configured in Linux?"]
},
{
  category: "Monitoring",
  question: "What is an Error Budget?",
  answer: "An error budget is the total allowable amount of system unreliability or downtime a service can experience within a given time period before violating its SLO.",
  example: "If your SLO requires 99.9% uptime, your monthly error budget is exactly 43 minutes of acceptable downtime. If you burn through it, deployments are frozen to focus on stability.",
  crossQuestions: ["How does an error budget bridge the gap between developers and DevOps teams?", "What triggers an alert on an error budget?"]
},
{
  category: "Monitoring",
  question: "What is CPU Throttling?",
  answer: "CPU Throttling occurs when a container runtime enforces its configured Cgroup CPU limits, slowing down the container's execution performance if it tries to consume more processing power than allowed.",
  example: "An application pod experiences slow response latencies because its Kubernetes limits are set too tight, causing the host to throttle its processing cycles.",
  crossQuestions: ["How do you identify container throttling using Prometheus metrics?", "What is the difference between CPU requests and CPU limits?"]
},

// NETWORKING QUESTIONS (161–175)
{
  category: "Networking",
  question: "What is the difference between TCP and UDP?",
  answer: "TCP is a connection-oriented, reliable protocol that guarantees ordered delivery of data packets via a 3-way handshake. UDP is connectionless and fast, sending packets without verifying delivery status or order.",
  example: "Webpages and file downloads use TCP to prevent data loss. Live video streaming and online gaming use UDP for real-time speed.",
  crossQuestions: ["Explain the flags used in a TCP 3-way handshake.", "Which OSI layer do TCP and UDP operate on?"]
},
{
  category: "Networking",
  question: "What happens when you type a URL into a web browser?",
  answer: "The browser checks local cache, queries DNS servers to translate the domain name into an IP address, establishes a TCP connection, completes a TLS handshake, and sends an HTTP GET request to pull the website content.",
  example: "Typing google.com triggers a DNS lookup that converts the string into an IP address like 142.250.190.46 to load the data.",
  crossQuestions: ["What is the role of an authorative name server in DNS?", "Which HTTP status code indicates a successful resource fetch?"]
},
{
  category: "Networking",
  question: "What is CIDR Notation?",
  answer: "CIDR (Classless Inter-Domain Routing) is a method for allocating IP addresses and routing IP packets, specifying a base network address and the number of fixed routing prefix bits.",
  example: "A subnet defined as `10.0.0.0/24` means the first 24 bits are fixed for the network, leaving 8 bits to allocate up to 256 unique IP addresses.",
  crossQuestions: ["How many usable IP addresses are available in a /32 subnet?", "Which subnet is larger: /16 or /24?"]
},
{
  category: "Networking",
  question: "Public vs Private IP Addresses?",
  answer: "Public IPs are unique globally and searchable across the open internet. Private IPs are non-routable over the internet and used strictly for communication within local networks or clouds.",
  example: "Your home router has a single Public IP facing the internet, while your personal laptop uses a Private IP like 192.168.1.5 locally.",
  crossQuestions: ["Name the standard private IP address ranges defined by RFC 1918.", "How does a machine with a private IP talk to the public internet?"]
},
{
  category: "Networking",
  question: "Layer 4 vs Layer 7 Load Balancing?",
  answer: "Layer 4 load balancing handles traffic at the transport layer based on routing protocols and ports (IP and TCP/UDP) without reading packet content. Layer 7 load balancing handles traffic at the application layer, parsing headers, cookies, and URLs.",
  example: "Routing traffic based on port numbers uses Layer 4. Routing requests for `/api/v1/users` to a specific backend microservice uses Layer 7.",
  crossQuestions: ["Which layer does an AWS Application Load Balancer (ALB) operate on?", "Which type of load balancing is faster and uses fewer processing resources?"]
},
{
  category: "Networking",
  question: "What is the difference between HTTP and HTTPS?",
  answer: "HTTP sends data between client and server in clear, unencrypted plain text. HTTPS wraps standard HTTP inside a secure SSL/TLS cryptographic layer to encrypt all data in transit.",
  example: "Entering passwords on an HTTP page leaves them vulnerable to sniffing attacks. An HTTPS connection ensures they are fully encrypted.",
  crossQuestions: ["What port does HTTP use vs HTTPS?", "What is a TLS handshake?"]
},
{
  category: "Networking",
  question: "What are the common DNS Record Types?",
  answer: "A Record (maps domain name to IPv4), AAAA Record (maps domain to IPv6), CNAME (maps domain to an alias domain name), MX Record (routes mail traffic), and TXT Record (stores verification text details).",
  example: "Mapping api.mycompany.com directly to an AWS load balancer DNS address uses a CNAME record.",
  crossQuestions: ["Can an A Record point to another domain name string?", "What is a TTL (Time to Live) in a DNS record?"]
},
{
  category: "Networking",
  question: "What is a NAT Gateway and why is it used?",
  answer: "A Network Address Translation (NAT) Gateway lets instances inside a secure, private subnet connect outward to the internet while completely blocking the public internet from initiating direct connections back in.",
  example: "An AWS database server in a private subnet uses a NAT Gateway to securely download open-source software security patches.",
  crossQuestions: ["Does a NAT Gateway require a public Elastic IP?", "How does a NAT Gateway differ from an Internet Gateway?"]
},
{
  category: "Networking",
  question: "Stateful vs Stateless Firewalls?",
  answer: "A Stateful firewall remembers active connections and automatically allows matching return traffic. A Stateless firewall treats every packet independently, requiring explicit configurations for inbound and outbound paths.",
  example: "AWS Security Groups are stateful (allowing inbound on port 80 opens the outbound path automatically). AWS NACLs are stateless and require explicit return rules.",
  crossQuestions: ["Which firewall type offers faster performance processing loops?", "Why use a stateless firewall if stateful is easier?"]
},
{
  category: "Networking",
  question: "What do 'Ping' and 'Traceroute' commands measure?",
  answer: "Ping tests simple network end-to-end connectivity and measures round-trip latency using ICMP echo requests. Traceroute displays the exact hop-by-hop path packets take across routers to reach a destination host.",
  example: "Using `ping 8.8.8.8` to check if your network configuration is online. Using `traceroute google.com` to see exactly which network router hop is dropping your connection.",
  crossQuestions: ["What protocol does traceroute use on Linux by default vs Windows?", "Can a server block ping requests while still serving web traffic?"]
},
{
  category: "Networking",
  question: "What is a Reverse Proxy?",
  answer: "A reverse proxy is a gateway server positioned in front of backend web servers, forwarding client requests to those servers to handle load balancing, security caching, and SSL termination.",
  example: "Using an Nginx server configuration block to handle SSL encryption before passing clean requests back to an internal Node.js app process.",
  crossQuestions: ["What is the difference between a forward proxy and a reverse proxy?", "Name two popular software solutions used as reverse proxies."]
},
{
  category: "Networking",
  question: "What is Subnetting and why is it implemented?",
  answer: "Subnetting is the architectural practice of splitting a large network into smaller, logically isolated sub-networks to improve performance and tighten cloud infrastructure security.",
  example: "Splitting an AWS VPC network to keep public web load balancers separated from private, high-security backend database clusters.",
  crossQuestions: ["Can subnets inside the same VPC talk to each other by default?", "How many IP addresses does AWS reserve in every single subnet?"]
},
{
  category: "Networking",
  question: "What is DNS Resolution Cache and how can it cause issues?",
  answer: "DNS Caching saves previously resolved IP address maps locally to speed up future requests. It can cause connection issues if an upstream server's IP address changes, but the system continues using the stale cached IP map.",
  example: "You migrate a web backend to a new load balancer, but your local laptop keeps pointing to the old server because the local DNS cache hasn't expired.",
  crossQuestions: ["How do you clear the DNS cache on a Linux system?", "What role does the TTL setting play in DNS caching?"]
},
{
  category: "Networking",
  question: "What is a VPN (Virtual Private Network)?",
  answer: "A VPN creates an encrypted connection tunnel over a public network, allowing remote clients or offices to access internal private corporate cloud environments safely.",
  example: "An engineer logging into an OpenVPN client from home to gain command-line terminal access to high-security private staging servers.",
  crossQuestions: ["What are two popular tunneling protocols used to implement VPNs?", "How does a Site-to-Site VPN differ from a Client VPN?"]
},
{
  category: "Networking",
  question: "What is an IP Port Number and why are they needed?",
  answer: "A port number is a communication endpoint identifier used by transport protocols to route network traffic directly to the specific software process running on a computer.",
  example: "A single cloud server can run an Nginx website on port 80 and an SSH terminal connection on port 22 simultaneously without conflicts.",
  crossQuestions: ["What is the range of well-known system ports?", "What port does a standard PostgreSQL database listen on?"]
},

// BONUS STANDALONE CROSS QUESTIONS (176–180)
{
  category: "Cross",
  question: "Can a Git merge conflict break a Jenkins automation pipeline?",
  answer: "Yes. If a developer pushes code containing unmerged conflict markers, the compilation build stage in Jenkins will fail immediately.",
  example: "Jenkins tries to run `npm run build`, hits unresolved conflict strings, and errors out.",
  crossQuestions: []
},
{
  category: "Cross",
  question: "Can Prometheus pull operational infrastructure metrics from a private EC2 subnet?",
  answer: "Yes, provided there is a route path open or a Prometheus server is running locally within the VPC network to scrape the private IP paths directly.",
  example: "Prometheus reaches out across internal VPC peering links to query Node Exporter data safely.",
  crossQuestions: []
},
{
  category: "Cross",
  question: "What happens to a running Terraform state file if a Git branch is rolled back?",
  answer: "Rolling back a Git branch does not alter the physical cloud resources or the remote state file. It simply means your written code no longer matches reality until you run a new plan/apply.",
  example: "The state file stays intact, but running `terraform plan` will show that Terraform wants to destroy the resources you just removed from your code.",
  crossQuestions: []
},
{
  category: "Cross",
  question: "Can an incorrect Linux network firewall rule cause a Prometheus scrape to fail?",
  answer: "Yes. If iptables or an AWS Security Group blocks inbound traffic on port 9100, Prometheus will throw a 'context deadline exceeded' error inside its targets UI.",
  example: "Blocking port 9100 prevents the Prometheus master instance from pulling metrics from the host.",
  crossQuestions: []
},
{
  category: "Cross",
  question: "Why should you avoid storing your active Terraform state file inside a Git repository?",
  answer: "Git repositories are not designed to handle state file locking, creating high risks of overwrite corruption. Additionally, state files store raw secrets in plain text, which should never be exposed in code histories.",
  example: "A database password configured via Terraform would be clearly visible to anyone with read access to that Git repository.",
  crossQuestions: []
}

]