from enum import Enum

class Status (Enum):
  NO_STATUS = -1
  NOT_STARTED = 0
  IN_PROGRESS = 1
  COMPLETED = 2

print(Status.NO_STATUS.value) # -1
print(Status.NOT_STARTED.name) # NOT_STARTED
print(Status.IN_PROGRESS.name) # IN_PROGRESS
print(Status.COMPLETED.value) # 2
