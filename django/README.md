# requirements.txt

```
Python==3.9.7
asgiref==3.5.0
Django==4.0.3
sqlparse==0.4.2
```

## Using pipreqs

Installation:

```
pip install pipreqs
```

Usage:

```
pipreqs /path/to/project
```

Note: Did not work for me. Even though the requirements.txt file was created, the file was blank.

**Limitation**: Pipreqs uses imports of projects to generate a requirements.txt file. So, it is very important to note that, pipreqs will not include the plugins required for specific projects. You need to add plugins information manually in a requirement.txt


