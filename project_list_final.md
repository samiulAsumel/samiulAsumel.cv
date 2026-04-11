# MD. Samiul Alam Sumel — Final Portfolio Project List
**Target:** IT Operations Specialist | Port & Logistics Systems — Saudi Arabia (DP World / Mawani / King Abdullah Port)
**Status date:** 2026

---

## SUMMARY TABLE

| Category | Projects | Status |
|----------|---------|--------|
| RHCSA Linux Lab Projects (EX200) | 20 | ✅ All Done |
| Live Deployed Production Apps | 4 | ✅ All Done |
| Bash Automation Scripts | 5 scripts | 🔲 Must Build |
| Python Admin Scripts | 4 scripts | 🔲 Must Build |
| Docker Containerization Lab | 2 apps dockerized | 🔲 Must Build |
| Ansible Automation Playbooks | 3 playbooks | 🔲 Must Build |
| GitHub Actions CI/CD Pipelines | 2 pipelines | 🔲 Must Build |
| AWS Cloud Deployment | 1 live app on EC2 | 🔲 Must Build |
| Kubernetes + Monitoring Stack | 1 K8s deployment + Grafana | 🔲 Must Build |
| **TOTAL** | **31 projects** | **24 done · 7 to build** |

---

## ✅ COMPLETED — RHCSA Enterprise Lab Projects (20/20)

All hosted at: **github.com/samiulAsumel**
All objectives: 100% RHCSA EX200 RHEL 9 coverage

### Foundation Level — 6 Projects
| # | Project Name | Key Skills Proven |
|---|-------------|-------------------|
| 1 | Enterprise User & Group Management | useradd, groupadd, sudo, visudo, password aging, account locking |
| 2 | Secure File Sharing Environment | chmod, chown, setfacl, getfacl, SGID, default ACL |
| 3 | Process Monitoring & Control | ps, top, kill, nice, renice, bg, fg, signals |
| 4 | System Service Management | systemctl start/stop/enable/disable/mask, troubleshooting |
| 5 | Secure SSH Server Configuration | SSH hardening, key-based auth, sshd_config, port change, AllowUsers |
| 6 | Log Monitoring & Analysis | journalctl, /var/log, persistent journal, security reports |

### Intermediate Level — 8 Projects
| # | Project Name | Key Skills Proven |
|---|-------------|-------------------|
| 7 | Static Network Configuration | nmcli, hostnamectl, DNS, ip, ss, static IP |
| 8 | Automated Backup System with Cron | crontab, tar, rsync, backup verification |
| 9 | Software Repository Management | dnf, rpm, local repo creation, gpgcheck |
| 10 | Disk Partition & Mount | lsblk, fdisk, parted, mkfs.xfs, mount, /etc/fstab with UUID |
| 11 | LVM Storage Management | pvcreate, vgcreate, lvcreate, lvextend, resize filesystem |
| 12 | SELinux Security Configuration | getenforce, setenforce, restorecon, chcon, semanage fcontext |
| 13 | Firewall Configuration | firewalld, firewall-cmd, --permanent, port and service control |
| 14 | NFS Server & Client Setup | /etc/exports, exportfs, NFS client mount, autofs, persistent fstab |

### Advanced Level — 6 Projects
| # | Project Name | Key Skills Proven |
|---|-------------|-------------------|
| 15 | Bash Automation Toolkit | User creation scripts, backup scripts, disk monitoring scripts |
| 16 | Boot Troubleshooting & Recovery | GRUB2 recovery, rescue mode, rd.break, root password reset |
| 17 | Container Deployment with Podman | Podman lifecycle, rootless containers, systemd integration, loginctl linger |
| 18 | Enterprise Server Deployment | Full RHEL 9: users, LVM storage, networking, SELinux, firewall, services |
| 19 | Monitoring & Performance Optimization | top, free, uptime, tuned profiles, tuned-adm |
| 20 | Fully Automated Server Setup Script | Bash provisioning: packages, users, firewall rules, service startup |

---

## ✅ COMPLETED — Live Deployed Production Systems (4/4)

### 1. Port Billing SaaS
- **URL:** portbill.vercel.app
- **Domain:** Port wharfrent billing — used by CF agents at Mongla Port
- **Stack:** HTML, CSS, JavaScript, Firebase Auth, Admin RBAC
- **Key features:** Slab-wise wharfrent, old/new rate, VAT/levy, PDF export, RBAC login
- **Status:** ✅ Live and actively used

### 2. Daily Vehicle Balance Tracking System
- **URL:** monthly-car-balance.vercel.app
- **Domain:** Vehicle tracking for Mongla Port Traffic Department
- **Stack:** HTML, CSS, JavaScript, Firebase real-time sync, analytics dashboard
- **Key features:** Live cloud sync, efficiency scoring, KPI analytics, Excel export
- **Status:** ✅ Live and actively used

### 3. PulseGuard Server Monitoring SaaS
- **URL:** pulse-guard-one.vercel.app
- **Domain:** Linux server security audit and auto-remediation
- **Stack:** Bash scripts, multi-distro Linux (RHEL, Ubuntu, Arch, SUSE, Alpine)
- **Key features:** SSH audit, firewall check, SUID detection, failed login monitor, auto-remediation
- **Status:** ✅ Live

### 4. Linux/DevOps Command Reference
- **URL:** devops-command-summary.vercel.app
- **Domain:** Enterprise Linux/DevOps/Cloud reference documentation
- **Stack:** HTML, CSS, JavaScript — 84 sections, 1,311 code blocks
- **Coverage:** Linux SysAdmin, Docker, K8s, Ansible, Terraform, AWS, Azure, GCP, RHCSA, RHCE
- **Status:** ✅ Live

---

## 🔲 MUST BUILD — DevOps Portfolio Projects (7 Projects)

> These prove your DevOps skills to Saudi IT employers.
> All must be pushed to GitHub with proper README files.
> Build in order — each one uses skills from the previous.

---

### PROJECT 1 — Bash Linux Automation Scripts
**Timeline:** Month 3 of DevOps roadmap
**GitHub Repo name:** `bash-automation-toolkit`

**5 Scripts to write:**

**Script 1: `user_setup.sh`**
- Creates user accounts with passwords, assigns to groups, configures sudo access
- Usage: `./user_setup.sh username groupname`
- Test: run script, verify user exists, verify sudo works, verify survives reboot

**Script 2: `backup.sh`**
- Backs up `/home` and `/etc` to `/backup/` with date-stamped tar.gz files
- Logs backup success/failure to `/var/log/backup.log`
- Usage: `./backup.sh` or via cron `0 2 * * * /root/backup.sh`

**Script 3: `disk_monitor.sh`**
- Checks disk usage on all mounted partitions
- If any partition >80% used → logs alert to `/var/log/disk_alert.log`
- Can be run via cron every 30 minutes

**Script 4: `service_health.sh`**
- Checks if critical services (sshd, nginx, firewalld) are running
- If any service is down → restarts it and logs the event
- Usage: run via cron `*/5 * * * *`

**Script 5: `system_report.sh`**
- Generates daily system report: hostname, uptime, CPU load, memory usage, disk usage, logged-in users, last 5 failed login attempts
- Saves report to `/root/reports/report_YYYY-MM-DD.txt`

**README must include:**
- What each script does (one paragraph each)
- How to run each script
- Sample output for each
- How to add to cron

**Why Saudi employers care:**
Port IT teams use Bash scripts every day. This proves you can write and maintain real operational scripts — not just run commands.

---

### PROJECT 2 — Python Admin Scripts
**Timeline:** Month 3 of DevOps roadmap
**GitHub Repo name:** `python-devops-scripts`

**4 Scripts to write (with AI help — read and understand each line):**

**Script 1: `log_analyzer.py`**
- Reads `/var/log/secure` (or `/var/log/auth.log`)
- Counts failed SSH login attempts per IP address
- Outputs: top 10 IPs with most failed attempts, total count, timestamp range
- Run: `python3 log_analyzer.py`

**Script 2: `disk_alert.py`**
- Uses Python `subprocess` to run `df -h`
- Parses output, finds partitions >80% full
- Prints alert with partition name and usage percentage

**Script 3: `user_report.py`**
- Reads `/etc/passwd` and `/etc/shadow`
- Lists all non-system users (UID >= 1000)
- Shows: username, home directory, shell, password last changed, account expiry

**Script 4: `port_billing_calc.py`**
- CLI version of your portbill.vercel.app billing logic
- Input: CLD date, delivery date, weight (tons), inside/outside
- Output: wharfrent amount, VAT, levy, total payable
- Run: `python3 port_billing_calc.py`

**README must include:**
- Comparison table: "Same task in Bash vs Python — which is better and why?"
- When to use Bash vs Python (decision guide)
- How to run each script
- Sample output

**Why Saudi employers care:**
Python is required for most DevOps and IT Ops roles. Showing the same task in Bash AND Python proves you understand both tools.

---

### PROJECT 3 — Docker Containerization Lab
**Timeline:** Month 5 of DevOps roadmap
**GitHub Repo name:** `docker-containerization-lab`

**Part A: Dockerize PulseGuard**

Step 1 — Write `Dockerfile`:
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Step 2 — Write `docker-compose.yml`:
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
  nginx-proxy:
    image: nginx:alpine
    ports:
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/ssl
    depends_on:
      - web
```

Step 3 — Add Nginx reverse proxy config with SSL
Step 4 — Test: `docker-compose up -d` → app accessible at https://localhost

**Part B: Dockerize portbill app**
- Write Dockerfile for portbill
- Add health check endpoint
- Add Nginx in front
- Document image build and run commands

**README must include:**
- Architecture diagram (ASCII):
  ```
  Internet → Nginx (443/SSL) → portbill container (80) → Firebase
  ```
- All commands to build and run
- How to view running containers
- How to view container logs
- How to stop and remove containers

**Why Saudi employers care:**
Docker is required for every modern DevOps role. Containerizing your own port apps makes this project tangible and unique.

---

### PROJECT 4 — Ansible Server Automation
**Timeline:** Month 6 of DevOps roadmap
**GitHub Repo name:** `ansible-server-automation`

**Folder structure:**
```
ansible-server-automation/
├── inventory/
│   └── hosts          (list your VPS IP here)
├── playbooks/
│   ├── server_setup.yml
│   ├── deploy_pulseguard.yml
│   └── security_hardening.yml
├── roles/
│   ├── common/
│   │   └── tasks/main.yml
│   ├── nginx/
│   │   └── tasks/main.yml
│   └── docker/
│       └── tasks/main.yml
├── templates/
│   └── nginx.conf.j2
└── README.md
```

**Playbook 1: `server_setup.yml`**
Tasks:
- Install required packages: nginx, docker, git, firewalld, vim
- Create deployment user with SSH key
- Configure firewall: allow 22, 80, 443
- Set SELinux to enforcing
- Enable and start: nginx, docker, firewalld
- Set hostname

**Playbook 2: `deploy_pulseguard.yml`**
Tasks:
- Pull latest PulseGuard code from GitHub
- Build Docker image
- Stop old container if running
- Start new container
- Verify container is healthy
- Reload Nginx if config changed

**Playbook 3: `security_hardening.yml`**
Tasks:
- Disable root SSH login (`PermitRootLogin no`)
- Set `PasswordAuthentication no`
- Configure password policies (min length, max age)
- Set SELinux enforcing
- Update all packages
- Remove unnecessary packages

**README must include:**
- How to install Ansible
- How to configure inventory
- How to run each playbook
- Expected output screenshots
- How to verify changes on remote server

**Why Saudi employers care:**
Ansible is listed in almost every Saudi DevOps and IT Operations job posting. Three real playbooks proves you can automate server management at scale.

---

### PROJECT 5 — GitHub Actions CI/CD Pipelines
**Timeline:** Month 6 of DevOps roadmap
**GitHub Repo name:** `cicd-pipeline-demo`

**Pipeline 1: Auto-deploy devops-command-summary**

File: `.github/workflows/deploy-docs.yml`
```yaml
name: Deploy Documentation Site
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Validate HTML
        run: npx html-validate index.html
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

**Pipeline 2: Build and push PulseGuard Docker image**

File: `.github/workflows/build-and-push.yml`
```yaml
name: Build and Push Docker Image
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      - name: Build and push
        uses: docker/build-push-action@v4
        with:
          push: true
          tags: samiulAsumel/pulseguard:latest
```

**README must include:**
- What each workflow triggers on
- How to set up GitHub Secrets (VERCEL_TOKEN, DOCKER_USERNAME, etc.)
- Screenshot of successful pipeline run in GitHub Actions tab
- How to view pipeline logs when something fails

**Why Saudi employers care:**
CI/CD is mentioned in virtually every DevOps job. A working pipeline on your own projects is the strongest possible proof.

---

### PROJECT 6 — AWS Cloud Deployment
**Timeline:** Month 7 of DevOps roadmap
**GitHub Repo name:** `aws-pulseguard-deployment`

**What to deploy:**
PulseGuard app on AWS EC2 with proper security, monitoring, and alerting.

**Step-by-step:**

1. **Create VPC:**
   - VPC CIDR: 10.0.0.0/16
   - Public subnet: 10.0.1.0/24
   - Internet Gateway attached

2. **Launch EC2 instance:**
   - Instance type: t2.micro (free tier)
   - AMI: RHEL 9 or Ubuntu 22.04
   - Key pair: your SSH key
   - Security Group rules:
     - SSH (22) — your IP only
     - HTTP (80) — 0.0.0.0/0
     - HTTPS (443) — 0.0.0.0/0

3. **Create IAM Role:**
   - Permissions: CloudWatch logs write, S3 read (for config)
   - Attach role to EC2 instance
   - Never use root credentials

4. **Install and configure:**
   - Connect via SSH: `ssh -i your-key.pem ec2-user@PUBLIC_IP`
   - Install Docker: `dnf install docker -y && systemctl enable docker`
   - Deploy PulseGuard: `docker run -d -p 80:80 samiulAsumel/pulseguard:latest`
   - Install Nginx, configure SSL with certbot

5. **CloudWatch monitoring:**
   - Create alarm: CPU utilization > 80% for 5 minutes → send email alert
   - Create alarm: instance status check fails → send email alert
   - Create log group for application logs

**README must include:**
- Architecture diagram:
  ```
  Internet → Route53 (optional) → EC2 (Nginx) → Docker (PulseGuard)
                                      ↓
                               CloudWatch Alarms → Email
  ```
- All AWS CLI commands used
- IAM policy JSON showing least privilege
- Security group rules with explanation
- How to SSH into the instance
- CloudWatch alarm setup screenshots

**Why Saudi employers care:**
AWS + real live deployment = immediately hireable. DP World and Mawani both use AWS infrastructure. A live app on EC2 with CloudWatch monitoring is concrete proof.

---

### PROJECT 7 — Kubernetes + Prometheus/Grafana Monitoring Stack
**Timeline:** Month 8 of DevOps roadmap
**GitHub Repo name:** `kubernetes-monitoring-stack`

**Part A: Deploy portbill on Kubernetes**

File structure:
```
kubernetes/
├── namespace.yaml
├── deployment.yaml      (portbill — 2 replicas)
├── service.yaml         (ClusterIP service)
├── ingress.yaml         (Nginx ingress controller)
├── configmap.yaml       (app environment config)
└── hpa.yaml             (Horizontal Pod Autoscaler — optional)
```

`namespace.yaml`:
```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: portbill
```

`deployment.yaml`:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portbill
  namespace: portbill
spec:
  replicas: 2
  selector:
    matchLabels:
      app: portbill
  template:
    metadata:
      labels:
        app: portbill
    spec:
      containers:
      - name: portbill
        image: nginx:alpine
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "50m"
          limits:
            memory: "128Mi"
            cpu: "100m"
```

**Part B: Prometheus + Grafana monitoring**

Install using Helm:
```bash
# Add Helm repos
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

# Install Prometheus
helm install prometheus prometheus-community/prometheus \
  --namespace monitoring --create-namespace

# Install Grafana
helm install grafana grafana/grafana \
  --namespace monitoring \
  --set adminPassword=admin123
```

Create Grafana dashboards for:
- Pod CPU and memory usage over time
- Pod restart count (alert if > 3 restarts)
- HTTP request rate
- Node health status

Set up alert rule: if any pod restarts more than 3 times in 10 minutes → trigger alert.

**README must include:**
- All `kubectl` commands to deploy
- How to access Grafana: `kubectl port-forward svc/grafana 3000:80 -n monitoring`
- Screenshot of working Grafana dashboard showing portbill metrics
- How to trigger and view an alert
- Architecture diagram:
  ```
  kubectl apply → K8s Cluster → portbill pods (x2) → ClusterIP → Ingress → Browser
                      ↓
               Prometheus scrapes metrics → Grafana dashboard → Alerts
  ```

**Why Saudi employers care:**
Kubernetes is now required for senior IT Ops roles at large companies. Adding Prometheus + Grafana monitoring proves you think like a production engineer, not just someone who can run basic commands.

---

## README TEMPLATE FOR ALL 7 PROJECTS

Copy this for every GitHub project README:

```markdown
# [Project Name]

## What This Does
[1-2 sentences: the problem it solves in plain language]

## Why I Built This
[Connect to real port operations OR specific DevOps skill need]

## Tech Stack
| Tool | Purpose | Why This Choice |
|------|---------|----------------|
| Docker | Containerization | Industry standard |
| Nginx | Reverse proxy | High performance, free |

## Architecture
[ASCII or image diagram showing how all components connect]

## How to Run
### Prerequisites
- [List what needs to be installed first]

### Steps
1. Clone repo: `git clone https://github.com/samiulAsumel/[repo-name]`
2. [Next step with exact command]
3. [Next step with exact command]
4. Verify: [command to confirm it works]

## Key Learnings
1. [Technical learning that applies to IT Ops roles]
2. [Technical learning that applies to IT Ops roles]
3. [Technical learning that applies to IT Ops roles]

## Connection to Port Operations
[How this project directly relates to your 12 years at Mongla Port — make this section unique to you]
```

---

## INTERVIEW ANSWERS — HOW TO PRESENT YOUR PROJECTS

### "Do you have Docker experience?"
> "Yes. I containerized my own server monitoring SaaS and port billing system using Docker Compose with Nginx reverse proxy and SSL. Both are publicly accessible. The monitoring app — PulseGuard — runs automated security audits on Linux servers. I can walk you through the Dockerfile and docker-compose.yml if you'd like."

### "What is your Linux experience?"
> "I completed the RHCSA EX200 training program — 220 days of hands-on labs plus 60 days of exam-specific coaching. I completed 20 enterprise projects covering users, storage with LVM, SELinux, firewall, NFS, Podman containers, and Bash automation. I can configure an RHEL server from scratch, harden it, set up monitoring, and automate routine tasks."

### "What is your port/logistics experience?"
> "12 years at Mongla Port Authority as Senior Outdoor Assistant — managing wharfrent billing, vehicle tracking, daily balance reports, and coordinating with CF agents. I also built a live billing SaaS that CF agents use to calculate port charges in advance. So I understand both sides — the IT infrastructure and the actual port business workflows."

### "Why should we hire you over someone with a CS degree?"
> "A CS graduate knows the theory but has never seen a wharfrent bill, doesn't know what a bill of lading is, and can't explain why CF agents need advance billing estimates. I know both. On day one I can configure your Linux servers, set up monitoring, and automate operational workflows — AND I understand what your port operations team actually needs from their IT systems. That combination is rare."

---

## PRIORITY ORDER — WHAT TO BUILD FIRST

1. **RHCSA exam** — book and pass it. This is your most important credential.
2. **Bash scripts (Project 1)** — simplest, most immediately useful, proves Linux skills
3. **Docker lab (Project 3)** — containerize your existing apps
4. **GitHub Actions (Project 5)** — short project, high impact on CV
5. **Ansible (Project 4)** — medium effort, maximum Saudi job market value
6. **AWS deployment (Project 6)** — proves cloud skills with real live URL
7. **Kubernetes + monitoring (Project 7)** — final tier, separates you from entry-level

---

*github.com/samiulAsumel | sa.sumel91@gmail.com | Mongla, Bangladesh | 2026*
