class Device:
    def __init__(self, devname, id):
        self.devname = devname
        self.id = id

    def update_devname(devname):
        self.devname = devname

    def print_devinfo(self):
        print(self.id, self.devname)

if __name__ == "__main__":
    dev = Device("ir-adv c5560", "C10012EF")
    dev.print_devinfo()
