import json

dataset = []

dataset_to_json = dataset[[
  'name',
  'country'
]].to_json(
  orient="records"
)

dataset_parsed = json.loads(
  dataset_to_json
)
