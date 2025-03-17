- normal call
```
flowchart LR
    id1[fetchPhotos] --> id2[PhotosUrlRequest]
    id2[PhotosUrlRequest] --> id3[fetchPhotos]
```
---
- async call
```
flowchart LR
 subgraph System["System"]
        system["Worker"]
  end
    id1["fetchPhotos"] --> id2["data"]
    id2 -- await --> system
    system -- resume --> id3["data"]
    id3 --> id4["fetchPhotos"]
```