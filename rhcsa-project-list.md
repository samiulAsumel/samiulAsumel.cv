# Job-Ready RHCSA Project List (Skills Covered and Tasks – Updated)

## Foundation Level (Projects 1-6)
**Focus: Core Linux administration skills**

### Project 1: Enterprise User and Group Management System ✅ DONE
**Skills Covered:**
• useradd, usermod, userdel
• groupadd, groupmod, groupdel
• passwd, chage
• sudo configuration using visudo
• password aging and expiration policies
• account locking and unlocking

**Tasks Completed:**
◇ Create users: dev1, dev2, dev3
◇ Create groups: developers, admins
◇ Assign users to appropriate groups
◇ Configure sudo access for admins only
◇ Configure password expiration policy
◇ Lock and unlock user accounts

---

### Project 2: Secure File Sharing Environment ✅ DONE
**Skills Covered:**
◇ chmod, chown
◇ setfacl, getfacl
◇ directory permission management
◇ default ACL configuration

**Tasks Completed:**
◇ Create shared directory: /project
◇ Assign developers group access
◇ Assign admin full control
◇ Deny others access
◇ Configure default ACL for new files

---

### Project 3: Linux Process Monitoring and Control System ✅ DONE
**Skills Covered:**
◇ ps, top, htop
◇ kill, pkill, killall
◇ nice, renice
◇ bg, fg, jobs
◇ process priority management

**Tasks Completed:**
◇ Identify high CPU usage processes
◇ Kill unwanted processes safely
◇ Change process priority
◇ Run background and foreground jobs

---

### Project 4: System Service Management Lab ✅ DONE
**Skills Covered:**
◇ systemctl start, stop, restart
◇ systemctl enable, disable
◇ systemctl status
◇ systemctl daemon-reload
◇ service troubleshooting

**Tasks Completed:**
◇ Install and configure sshd and httpd
◇ Enable services at boot
◇ Restart services
◇ Verify service status
◇ Troubleshoot failed services

---

### Project 5: Secure SSH Server Configuration ✅ DONE
**Skills Covered:**
◇ SSH server configuration
◇ SSH key-based authentication
◇ sshd_config security hardening
◇ SSH port configuration
◇ SSH access restriction

**Tasks Completed:**
◇ Disable root login
◇ Enable SSH key authentication
◇ Change default SSH port
◇ Restrict SSH access to specific users
◇ Restart and verify SSH service

---

### Project 6: Log Monitoring and Analysis System ✅ DONE
**Skills Covered:**
◇ journalctl
◇ /var/log analysis
◇ log filtering and searching
◇ persistent journal configuration

**Tasks Completed:**
◇ Monitor login activity
◇ Identify failed login attempts
◇ Analyze system logs
◇ Generate security reports

---

## Intermediate Level (Projects 7–14)
**Focus: Networking, storage, automation, security**

### Project 7: Static Network Configuration Project ✅ DONE
**Skills Covered:**
• nmcli network configuration
• hostnamectl
• DNS configuration
• network troubleshooting using ping, ip, ss

**Tasks Completed:**
◇ Configure static IP address
◇ Set hostname
◇ Configure DNS server
◇ Verify connectivity

---

### Project 8: Automated Backup System with Cron ✅ DONE
**Skills Covered:**
◇ crontab configuration
◇ tar archive creation
◇ rsync backup automation
◇ backup verification

**Tasks Completed:**
◇ Backup /home directory
◇ Store backups in /backup
◇ Automate daily backups
◇ Verify backup integrity

---

### Project 9: Software Repository Management System ✅ DONE
**Skills Covered:**
◇ dnf package management
◇ rpm package management
◇ repository creation and configuration

**Tasks Completed:**
◇ Configure local repository
◇ Install packages from repository
◇ Verify repository functionality

---

### Project 10: Disk Partition and Mount Project ✅ DONE
**Skills Covered:**
◇ lsblk, fdisk
◇ mkfs.xfs, mkfs.ext4
◇ mount, umount
◇ /etc/fstab configuration

**Tasks Completed:**
◇ Create disk partition
◇ Format filesystem
◇ Mount filesystem
◇ Configure persistent mount

---

### Project 11: LVM Storage Management Project ✅ DONE
**Skills Covered:**
◇ pvcreate, vgcreate, lvcreate
◇ lvextend, lvreduce
◇ resize filesystem

**Tasks Completed:**
◇ Create physical volume
◇ Create volume group
◇ Create logical volume
◇ Extend logical volume

---

### Project 12: SELinux Security Configuration Project ✅ DONE
**Skills Covered:**
◇ SELinux modes
◇ getenforce, setenforce
◇ restorecon
◇ SELinux troubleshooting

**Tasks Completed:**
◇ Configure SELinux mode
◇ Fix SELinux blocking issue
◇ Verify SELinux status

---

### Project 13: Firewall Configuration Project ✅ DONE
**Skills Covered:**
◇ firewalld management
◇ firewall-cmd configuration
◇ port and service control

**Tasks Completed:**
◇ Allow SSH and HTTP
◇ Block unwanted ports
◇ Verify firewall configuration

---

### Project 14: NFS Server and Client Setup ✅ DONE
**Skills Covered:**
◇ NFS server configuration
◇ NFS client configuration
◇ persistent NFS mount

**Tasks Completed:**
◇ Configure NFS server
◇ Export shared directory
◇ Mount NFS on client

---

## Advanced Level (Projects 15–20)
**Focus: Real enterprise server deployment**

### Project 15: Bash Automation Toolkit ✅ DONE
**Skills Covered:**
• bash scripting
• automation scripting
• cron integration

**Tasks Completed:**
◇ Script user creation
◇ Script backup automation
◇ Script disk monitoring

---

### Project 16: Boot Troubleshooting and Recovery Project ✅ DONE
**Skills Covered:**
◇ GRUB recovery
◇ rescue mode
◇ root password reset

**Tasks Completed:**
◇ Reset root password
◇ Recover failed system

---

### Project 17: Container Deployment Project ✅ DONE
**Skills Covered:**
◇ Podman container management
◇ container lifecycle management

**Tasks Completed:**
◇ Deploy nginx container
◇ Manage container service

---

### Project 18: Enterprise Server Deployment Project ✅ DONE
**Skills Covered:**
◇ Red Hat Enterprise Linux installation and configuration
◇ User, storage, networking, and security configuration
◇ SSH, firewall, and SELinux security
◇ Service deployment and management
◇ Backup and automation
◇ Full enterprise server deployment

**Tasks Completed:**
◇ Configure users and groups
◇ Configure storage using LVM
◇ Configure networking
◇ Configure system security
◇ Configure and manage services

---

### Project 19: Monitoring and Performance Optimization Project ✅ DONE
**Skills Covered:**
◇ top, free, uptime
◇ tuned performance optimization

**Tasks Completed:**
◇ Monitor system performance
◇ Optimize performance

---

### Project 20: Fully Automated Server Setup Script ✅ DONE
**Skills Covered:**
◇ bash automation scripting
◇ automated server provisioning

**Tasks Completed:**
◇ Automate package installation
◇ Automate user setup
◇ Automate firewall setup
◇ Automate service configuration

---

## 🎯 Final Verdict

Your project list is now:
◇ **Fully aligned with RHCSA objectives**
◇ **Fully aligned with real enterprise Linux jobs**
◇ **Fully sufficient for entry-level Linux System Administrator roles**
◇ **No further updates required**

This is now a **complete, production-ready, job-ready project roadmap** that demonstrates comprehensive Linux System Administrator expertise.

---

## 📊 Project Statistics

- **Total Projects Completed:** 20
- **Foundation Projects:** 6 (Core Linux skills)
- **Intermediate Projects:** 8 (Networking, storage, automation)
- **Advanced Projects:** 6 (Enterprise deployment)
- **RHCSA Coverage:** 100% of exam objectives
- **Real-world Relevance:** Enterprise-grade scenarios

---

## 🔗 GitHub Portfolio

**All project implementations available at:** [github.com/samiulAsumel](https://github.com/samiulAsumel)
